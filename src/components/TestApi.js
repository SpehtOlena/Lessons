import { createContext, useEffect, useState } from 'react';
import Post from './Post/Post';

// Context API, createContext
// 1.Створити Context - const ThemeContext = createContext();
// 2.Обгортути в контекс апку  - <ThemeContext.Provider value={theme}>.....</ThemeContext.Provider>
// 3. Дістаємо Context через хук useContext - (в компоненті Post) const theme = useContext(ThemeContext)

// Найважливіші хуки: 1.useState 2.useReducer, 3.useEffect, 4.useRef, 5.useContext, 6.useCallback


export const ThemeContext = createContext();

export const TestApi = () => {
	const [data, setData] = useState([]);
	const theme = 'light'

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(data => setData(data))
	}, [])
	return (
		<div>
			<ThemeContext.Provider value={theme}>
				<div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between" }}>
					{
						!!data.length &&
						data.map((value, index) => <Post data={value} key={index} />)
					}
				</div>
			</ThemeContext.Provider>

		</div>
	)
}
