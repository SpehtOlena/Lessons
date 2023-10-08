import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			Home
			<Link to={'home/admin'}>Admin</Link>
		</div>
	)
}
export default Home

