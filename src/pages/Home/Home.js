
import { useSelector } from "react-redux";
import { Space, Card, Typography } from "antd";
import { Link } from "react-router-dom";
import ColorBox from "../../components/ColorBox/ColorBox";

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
							cover={<img alt={value.name} src={value.photo} />}
						>
							<Typography.Title level={5}>{value.name}</Typography.Title>
							<p>{value.short_description}</p>
							<p>{`${value.price.toFixed(2)} $`}</p>
						</Card>
					</Link>

				)
			}
		</Space >
	)
}
export default Home 