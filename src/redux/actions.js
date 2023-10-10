import axios from "axios"
import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USER, GET_USERS } from "./types/USER"

const URL = 'http://localhost:3000/'

export function axiosRequest(data, namePage, request) {
	const httpRequest = request.toLowerCase();
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
						dispatch({ type: CREATE_USER, payload: response.data })
					})
			}
		}
		case 'put': {
			return async dispatch => {
				axios
					.put(`${URL}${namePage}/${data.id}`, data)
					.then(response => {
						dispatch({ type: EDIT_USER, payload: response.data })
					})
			}
		}
		case 'delete': {
			return async dispatch => {
				axios
					.delete(`${URL}${namePage}/${data.id}`)
					.then(response => {
						dispatch({ type: DELETE_USER, payload: response.data })
					})
			}
		}
		case 'get': {
			return async dispatch => {
				axios
					.get(`${URL}${namePage}/${data.id}`)
					.then(response => {
						dispatch({ type: GET_USER, payload: response.data })
					})
			}
		}
	}
}