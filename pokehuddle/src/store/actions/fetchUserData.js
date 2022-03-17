import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_USER_DATA = "FETCH_USER_DATA"

export const fetchUserData = () => {
	const uname = window.localStorage.getItem("pokehuddle-username")
	return (dispatch) => {

		axiosWithAuth()
		.get(`/users/user/username/${uname}`)
		.then((res) => {
			// setUserData(res.data)
			// console.log("fetchUserData: ", res)

		})
		.catch((err) => {
			console.log("err: ", err);
		});

		dispatch({ type: FETCH_USER_DATA, payload:uname })

	}
}