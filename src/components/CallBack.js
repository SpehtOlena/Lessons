import { useCallback } from "react";
import React from "react";

const ChildComponent = React.memo(({ onClick }) => {
	console.log('ChildComponent rendered!');
	return <button onClick={() => onClick}>Click me!</button>
})

const CallBack = () => {
	const handleClick = useCallback(() => {
		console.log('Button Clicked')
	}, [])
	return (
		<div>
			<ChildComponent onClick={handleClick} />
		</div>
	)
}
export default CallBack