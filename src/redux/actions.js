import axios from "axios"
import { EDIT_USER, GET_USERS } from "./types/USER"

const URL = 'http://localhost:3000/'

function axiosRequest(data, namePage, request) {
	const httpRequest = request.toLowerCase()
	switch (request) {
		default:
			return async dispatch => {
				axios
					.get(URL + namePage)
					.then(response => {
						dispatch({ type: GET_USERS, payload: response.data })
					})
			}
		case 'post': {
			return async dispatch => {
				axios
					.post(URL + namePage, data)
					.then(response => {
						dispatch({ type: EDIT_USER, payload: response.data })
					})
			}
		}
	}
}