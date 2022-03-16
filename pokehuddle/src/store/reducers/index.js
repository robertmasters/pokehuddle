import { FETCH_LOGIN_TOKEN_ERROR, FETCH_LOGIN_TOKEN_START, FETCH_LOGIN_TOKEN_SUCCESS } from "../actions"

const initialState = {
	isLoading: false,
	username: "",
	error: ""
}

export const userReducer = (state = initialState, action) => {
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
		default:
			return state
	}
}
