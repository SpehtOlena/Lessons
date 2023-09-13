import { useEffect, useState } from "react";

export default function useCustomHook1(initialValue) {
	const [value1, setValue] = useState(initialValue);
	useEffect(() => {
		localStorage.setItem('data', value1)
	}, [value1]);

	const handleChange = (newValue) => {
		setValue(newValue)
	}
	return { value1, handleChange }
}

//27