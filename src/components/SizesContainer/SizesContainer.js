import { Space } from "antd";
import { sizes } from "../../structures";
import SizeBox from "../SizeBox/SizeBox";
import { useEffect, useState } from "react";

const SizesContainer = ({ sizesState, setSizesState }) => {
	useEffect(() => {
		setSizesState(sizes.map(value => {
			return {
				value: value,
				active: false
			}
		}))
	}, []);
	// useEffect(() => {
	// 	setSizesState(sizes.map((value, index) => {
	// 		if (sizeValues.includes(value)) {
	// 			return {
	// 				value: value,
	// 				active: true
	// 			}
	// 		} else {
	// 			return {
	// 				value: value,
	// 				active: false
	// 			}
	// 		}
	// 	}));
	// }, [sizeValues]);
	return (
		<Space wrap>
			{
				sizesState.map((value, index) => <SizeBox sizesState={sizesState} setSizesState={setSizesState} size={value} key={index} />)
			}
		</Space>
	)
}
export default SizesContainer

// 1:40