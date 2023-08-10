

const Button = ({ showUserCard, setShowUserCard }) => {

	const onButtonClick = () => {
		setShowUserCard(!showUserCard)
	}
	return (
		<button onClick={onButtonClick} style={{ fontSize: 20, padding: 10, borderRadius: 10, background: '#9266c7' }}>
			{showUserCard ? 'Сховати картку' : 'Відобразити картку'}
		</button >
	)
}
export default Button
