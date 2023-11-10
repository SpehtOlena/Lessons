import axios from "axios"
import { GET_PRODUCT, GET_PRODUCTS, EDIT_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, PRODUCT_ERROR } from './types/PRODUCT'

const URL = 'http://localhost:3000/'

// https://fake-server-blush.vercel.app/

export function axiosRequest(data, namePage, request) {
	const httpRequest = request.toLowerCase();
	switch (request) {
		default:
			return async dispatch => {
				axios
					.get(URL + namePage)
					.then(response => {
						dispatch({ type: GET_PRODUCTS, payload: response.data })
					})
			}
		case 'post': {
			return async dispatch => {
				axios
					.post(URL + namePage, data)
					.then(response => {
						dispatch({ type: CREATE_PRODUCT, payload: response.data })
					})
			}
		}
		case 'put': {
			return async dispatch => {
				axios
					.put(`${URL}${namePage}/${data.id}`, data)
					.then(response => {
						dispatch({ type: EDIT_PRODUCT, payload: response.data })
					})
			}
		}
		case 'delete': {
			return async dispatch => {
				axios
					.delete(`${URL}${namePage}/${data.id}`)
					.then(response => {
						dispatch({ type: DELETE_PRODUCT, payload: data })
					})
			}
		}
		case 'get': {
			return async dispatch => {
				axios
					.get(`${URL}${namePage}/${data.id}`)
					.then(response => {
						dispatch({ type: GET_PRODUCT, payload: response.data })
					})
					.catch((error) => {
						dispatch({
							type: PRODUCT_ERROR,
							payload: { message: error.message, code: error.code, status: error.status }
						})
					})
			}
		}
	}
}

export function clearError() {
	return {
		type: PRODUCT_ERROR,
		payload: null
	}
}