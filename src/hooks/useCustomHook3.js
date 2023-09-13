import { useEffect, useState } from "react";

export default function useCustomHook3(initialValue) {
	const [value3, setValue] = useState(initialValue);
	useEffect(() => {
	}, [value3]);

	const handleChangeNotification = (newValue) => {
		setValue(newValue)
	}
	return { value3, handleChangeNotification }
}

