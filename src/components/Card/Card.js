import './Card.css'

const Card = ({ data, onClick }) => {
	const { id, name, username, email, address, phone, website, company } = data
	return (
		<div onClick={onClick} className={'card'}>
			<div className={'container'}>
				<h1>{name}</h1>
				<h2>{username}</h2>
				<h3>{email}</h3>
				<h5>{phone}</h5>
			</div>
		</div>
	)
}
export default Card