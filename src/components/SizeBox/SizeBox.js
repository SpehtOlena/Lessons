import './SizeBox.css';
import { useEffect, useState } from 'react';

const SizeBox = ({ size, disabled, onClick, setSizesState, sizesState }) => {
	// useEffect(() => {
	// 	onClick(active)
	// 	// if (sizeValues.includes(children)) {
	// 	// 	setActive(true)
	// 	// } else {
	// 	// 	setActive(false)
	// 	// }
	// }, [active])
	return (
		<div
			onClick={() => {
				if (!disabled) {
					setSizesState(
						sizesState.map(item => {
							if (item.value === size.value) {
								return {
									value: size.value,
									active: !size.active
								}
							} else {
								return item
							}
						})
					)
				}
			}}
			className={`${disabled ? 'size-box-disabled' : 'size-box'} ${size.active ? 'size-box-active' : ''}`}>
			{size.value}
		</div>
	)
}
export default SizeBox