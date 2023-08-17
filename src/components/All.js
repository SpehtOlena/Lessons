import React, { useState, useCallback, useEffect } from "react"

const All = () => {
	const [count, setCount] = useState(0);
	const increment = useCallback(() => {
		setCount(prevState => prevState + 1)
	}, [])

	useEffect(() => {
		console.log("effects run");
		document.title = `Count: ${count}`
	}, [increment])
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={increment}>Increment</button>

		</div>
	)
}
export default All