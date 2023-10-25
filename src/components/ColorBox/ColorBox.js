import './ColorBox.css';
import { useState } from 'react';

const ColorBox = ({ color }) => {
	const [activeColor, setActiveColor] = useState(false);
	return (
		<div onClick={() => setActiveColor(!activeColor)} className={`color-box ${activeColor ? 'color-box-active' : ''}`}>
			<div style={{ backgroundColor: color }} className={'color-box-item'} />
		</div >
	)
}
export default ColorBox