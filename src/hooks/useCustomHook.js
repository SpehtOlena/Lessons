import { useEffect, useState } from "react";

export default function useCustomHook(initialValue) {
	const [value, setValue] = useState(initialValue);
	useEffect(() => {
	}, [value]);

	const handleChange = (newValue) => {
		setValue(newValue)
	}
	return { value, handleChange }
}

//27