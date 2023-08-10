const TestButton = ({ showCard2, setShowcard2 }) => {

	const handleCard2 = () => {
		setShowcard2(!showCard2)
	}

	return (
		<div>
			<button onClick={handleCard2}>{showCard2 ? 'Hide Card' : 'Show Card'}</button>
		</div>
	)
}
export default TestButton