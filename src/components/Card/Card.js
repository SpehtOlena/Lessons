import './Card.css'

const Card = ({ value }) => {
	const { id, name, age, email, city } = value;
	return (
		<div className={"card"}>
			<button>{id}</button>
			<h1>{name}</h1>
			<h2>{age}</h2>
			<h3>{email}</h3>
			<h4>{city}</h4>
		</div>
	)
}
export default Card