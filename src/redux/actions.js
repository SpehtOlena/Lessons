import { GET_SHOPPING_CART_PRODUCT, GET_SHOPPING_CART_PRODUCTS, EDIT_SHOPPING_CART_PRODUCT, CREATE_SHOPPING_CART_PRODUCT, CLEAR_SHOPPING_CART_PRODUCTS } from "./types/SHOPPING_CART_PRODUCT";

export function addProductToShoppingCart(product, count, color) {
	return {
		type: CREATE_SHOPPING_CART_PRODUCT, payload: {
			name: product.name,
			color: color,
			id: product.id + color,
			price: product.price,
			count: count,
			sizes: product.sizes,
			image: product.images[color]
		}

	}
}

export function editProductToShoppingCard(product, count) {
	return {
		type: EDIT_SHOPPING_CART_PRODUCT, payload: { ...product, count: count }
	}
}

export function clearShoppingCard() {
	return {
		type: CLEAR_SHOPPING_CART_PRODUCTS
	}
}