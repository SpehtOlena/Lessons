import { ShoppingCartOutlined } from '@ant-design/icons';
import './ShopCardComponent.css'

const ShopCardComponent = ({ price }) => {
	return (
		<div className={'shop_cart_component'}>
			<ShoppingCartOutlined />
			<div className={'shop_cart_component_price_container'}>
				<p>
					Shopping Cart
				</p>
				<p>
					{price || "0,00"} EUR
				</p>
			</div>

		</div>
	)
}
export default ShopCardComponent