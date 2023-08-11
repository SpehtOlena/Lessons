import AdminPanel from "./AdminPanel/AdminPanel";
import UsersPanel from "./UsersPanel/UsersPanel";
import GuestPanel from "./GuestPanel/GuestPanel";
import { useState } from "react";

const Pages = () => {
	// Users Type
	const [userType, setUserType] = useState()

	function renderUserType() {
		switch (userType) {
			case "admin": {
				return <AdminPanel />
			}
			case "users": {
				return <UsersPanel />
			}
			default: {
				return <GuestPanel />
			}
		}
	}

	return (
		<div>
			<div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
				<button onClick={() => { setUserType("users") }}>User</button>
				<button onClick={() => { setUserType("admin") }}>Admin</button>
				<button onClick={() => { setUserType("") }}>Guest</button>
			</div>
			{
				renderUserType()
			}
		</div>

	)

}
export default Pages