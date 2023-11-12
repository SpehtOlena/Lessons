import { useSelector } from "react-redux";
import "./ShoppingCart.css";
import { Space } from "antd/lib";


const ShoppingCart = () => {
	const data = useSelector(state => state.shoppingCartProducts.data)
	return (
		<Space>
			{
				data.map(value => (value.product.price * value.count).toFixed(2))
			}
		</Space >
	)
}
export default ShoppingCart