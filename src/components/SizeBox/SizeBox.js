import './SizeBox.css';
import { useState } from 'react';

const SizeBox = ({ children, disabled }) => {
	const [active, setActive] = useState(false);
	return (
		<div onClick={() => {
			if (!disabled) {
				setActive(!active)
			}
		}} className={`${disabled ? 'size-box-disabled' : 'size-box'} ${active ? 'size-box-active' : ''}`}>
			{children}
		</div>
	)
}
export default SizeBox