import './Card.css'

const Card2 = ({ value }) => {
	const { id, name, age, email, city, gender } = value;
	return (
		<div className={"card"}>
			<button>{id}</button>
			<h1 className={gender === 'male' ? 'male' : 'female'}>{name}</h1>
			<h2>{age}</h2>
			<h3>{email}</h3>
			<h4>{city}</h4>
		</div>
	)
}
export default Card2