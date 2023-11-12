import './ColorBox.css';
import { useEffect, useState } from 'react';

const ColorBox = ({ color, onClick, colorsValues, disabled }) => {
	const [active, setActive] = useState(false);
	useEffect(() => {
		onClick(active)
	}, [active])
	if (disabled) {
		return <div className={`color-box-disabled`}>
			<div style={{ backgroundColor: color.value }} className={'color-box-item'} />
		</div>
	} else {
		return (
			<div onClick={() => setActive(!active)} className={`color-box ${active ? 'color-box-active' : ''}`}>
				<div style={{ backgroundColor: color }} className={'color-box-item'} />
			</div >
		)
	}
}
export default ColorBox