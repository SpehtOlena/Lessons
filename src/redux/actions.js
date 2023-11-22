import { GET_SHOPPING_CART_PRODUCT, GET_SHOPPING_CART_PRODUCTS, EDIT_SHOPPING_CART_PRODUCT, CREATE_SHOPPING_CART_PRODUCT, CLEAR_SHOPPING_CART_PRODUCTS } from "./types/SHOPPING_CART_PRODUCT";

export function addProductToShoppingCart(product, count) {
	return {
		type: CREATE_SHOPPING_CART_PRODUCT, payload: { product: product, count: count }

	}
}

export function editProductToShoppingCard(product, quantity) {
	return {
		type: EDIT_SHOPPING_CART_PRODUCT, payload: { ...product, quantity: quantity }
	}
}