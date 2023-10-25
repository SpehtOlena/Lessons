import './ShopIcon.css';
import { ShoppingOutlined } from '@ant-design/icons';

const ShopIcon = ({ price }) => {
	return (
		<div className={'shop-icon'}>
			<ShoppingOutlined style={{ fontSize: 18 }} />
			<div className={'shop-icon-content'}>
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
export default ShopIcon