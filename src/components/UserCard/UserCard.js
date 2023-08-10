import { useState } from "react"
import Button from "./Button"

const UserCard = ({ name, age }) => {
	const [showUserCard, setShowUserCard] = useState(true)
	if (showUserCard) {
		return (
			<div style={{ width: 200, margin: 20, border: '1px solid black', borderRadius: 10 }}>
				<h2>{name}</h2>
				<h3>{age}</h3>
				<Button showUserCard={showUserCard} setShowUserCard={setShowUserCard} />
			</div>
		)
	} else {
		return <Button showUserCard={showUserCard} setShowUserCard={setShowUserCard} />
	}

}
export default UserCard