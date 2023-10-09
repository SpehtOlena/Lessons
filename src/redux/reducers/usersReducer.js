import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USER, GET_USERS } from "../types/USER";

const initialState = {
	data: [],
	item: {}
}

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state
		case GET_USERS: {
			return { ...state, data: action.payload }
		}
		case GET_USER: {
			return { ...state, item: action.payload }
		}
		case CREATE_USER: {
			return { ...state, data: [...state.data, action.payload] }
		}
		case EDIT_USER: {
			return {
				...state, data: state.data.map(value => {
					if (value.id === action.payload.id) {
						return action.payload
					} else {
						return value
					}
				})
			}
		}
		case DELETE_USER: {
			return { ...state, data: state.data.filter(value => value.id !== action.payload.id) }
		}
	}
}