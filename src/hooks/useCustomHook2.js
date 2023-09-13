import { useEffect, useState } from "react";

export default function useCustomHook2(initialValue) {
	const [value2, setValue] = useState(initialValue);
	useEffect(() => {
	}, [value2]);

	const handleChangeLocation = (newValue) => {
		setValue(newValue)
	}
	return { value2, handleChangeLocation }
}

