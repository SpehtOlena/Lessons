import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div>
			Home
			<Link to={'/admin'}>Admin</Link>
		</div>
	)
}
export default Home