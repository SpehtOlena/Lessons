import { Link } from 'react-router-dom';
import './ShopIcon.css';
import { ShoppingOutlined } from '@ant-design/icons';

const ShopIcon = ({ price }) => {
	return (

		<Link to={'/shopping_cart'} className={'shop-icon'}>
			<ShoppingOutlined style={{ fontSize: 18, color: "white " }} />
			<div className={'shop-icon-content'}>
				<p>
					Shopping Cart
				</p>
				<p>
					{price || "0,00"} EUR
				</p>
			</div>
		</Link>

	)
}
export default ShopIcon