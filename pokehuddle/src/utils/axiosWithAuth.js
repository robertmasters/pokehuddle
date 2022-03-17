import axios from "axios";

//returns new instance of axios with the config object built into it.
export const axiosWithAuth = () => {
    let baseUrl = null
		if (process.env.REACT_APP_API_URL) {
			baseUrl = process.env.REACT_APP_API_URL
		} else {
			baseUrl = "https://masters-pokehuddlerest.herokuapp.com"
		}

    const token = JSON.parse(window.localStorage.getItem("pokehuddle-token"))
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
        },
        baseURL: baseUrl
    })
}
