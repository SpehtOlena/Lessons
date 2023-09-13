import { useEffect, useState } from "react";

const useCustomTheme = (defaultTheme) => {
	const [theme, setTheme] = useState(defaultTheme);
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
	}
	return { theme, toggleTheme }
};

export default useCustomTheme;