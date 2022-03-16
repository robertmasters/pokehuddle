import axios from "axios"

export const FETCH_LOGIN_TOKEN_START = "FETCH_LOGIN_TOKEN_START"
export const FETCH_LOGIN_TOKEN_SUCCESS = "FETCH_LOGIN_TOKEN_SUCCESS"
export const FETCH_LOGIN_TOKEN_ERROR = "FETCH_LOGIN_TOKEN_ERROR"

const client = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET

export const fetchLogin = (data, navigate) => {

	return (dispatch) => {

		dispatch({ type: FETCH_LOGIN_TOKEN_START })

		axios
		.post('https://masters-pokehuddlerest.herokuapp.com/login',
		`grant_type=password&username=${data.username}&password=${data.password}`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(`${client}:${secret}`).toString('base64')}`,
				"Content-Type": "application/x-www-form-urlencoded"
		}})
		.then((res) => {
			dispatch({ type: FETCH_LOGIN_TOKEN_SUCCESS, payload: data.username})
			window.localStorage.setItem('pokehuddle-token', JSON.stringify(res.data.access_token)) // JSON. stringify ensures that token is a string, only downside is that it has to be parsed when its accessed / also used window.localStorage instead of just localStorage, as some browsers dont recognize localStorage as a global variable, so using window. is a safe option
			console.log("response: ", res)
			navigate('/dashboard')
		})
		.catch((err)=> {
			console.log("error: ",err)
			dispatch({type: FETCH_LOGIN_TOKEN_ERROR, payload: err.message})
		})

	}
}