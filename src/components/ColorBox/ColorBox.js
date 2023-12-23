
import './ColorBox.css';
import { useEffect, useState } from 'react';

const ColorBox = ({ color, onClick, colorsValues }) => {
	const [active, setActive] = useState(false);
	useEffect(() => {
		onClick(active)
		if (colorsValues.includes(color)) {
			setActive(true)
		} else {
			setActive(false)
		}
	}, [active])
	return (
		<div onClick={() => setActive(!active)} className={`color-box ${active ? 'color-box-active' : ''}`}>
			<div style={{ backgroundColor: color }} className={'color-box-item'} />
		</div >
	)
}
export default ColorBox

