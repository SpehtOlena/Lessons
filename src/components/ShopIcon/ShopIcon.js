import { Link } from 'react-router-dom';
import './ShopIcon.css';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useSelector } from 'react-redux';

const ShopIcon = () => {
	const data = useSelector(state => state.shoppingCardProducts.data)
	return (
		<div className={'shop-icon'}>
			<LiaShoppingBagSolid />
			<div className={'shop-icon-content'}>
				<p>Shopping Cart</p>
				<p>
					{!!data && data.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)} EUR
				</p>
			</div>
		</div>
	);
};
export default ShopIcon