
import { useSelector } from "react-redux";
import { Space, Card } from "antd";
import { Meta } from "antd/lib/list/Item";
import { Link } from "react-router-dom";

const Home = () => {

	const products = useSelector(state => state.products.data)

	return (
		<Space wrap>
			{
				products.map(value =>
					<Link to={`/shop/${value.id}`} key={value.id}>
						<Card
							hoverable
							style={{
								width: 240,
							}}
							cover={<img alt={value.title} src={value.image} />}
						>
							<Meta title={value.title} description={`${value.price} $`} />
						</Card>
					</Link>

				)}
		</Space>
	)
}
export default Home 