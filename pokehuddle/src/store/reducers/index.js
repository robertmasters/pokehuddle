import { FETCH_LOGIN_TOKEN_ERROR, FETCH_LOGIN_TOKEN_START, FETCH_LOGIN_TOKEN_SUCCESS } from "../actions"
import { FETCH_USER_DATA } from "../actions/fetchUserData"

const initialState = {
	isLoading: false,
	username: "",
	articles: {},
	email: "",
	role: "",
	error: ""
}

export const loginReducer = (state = initialState, action) => {
	switch(action.type) {

		case FETCH_LOGIN_TOKEN_START:
			return {
				...state,
				isLoading: true,
				error: "",
			}
		case FETCH_LOGIN_TOKEN_SUCCESS:
			return {
				...state,
				isLoading: false,
				username: action.payload
			}
		case FETCH_LOGIN_TOKEN_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			}
		case FETCH_USER_DATA:
			return {
				...state,
				username: action.payload.username,
				articles: action.payload.articles,
				email: action.payload.email,
				role: action.payload.role
			}
		default:
			return state
	}
}
