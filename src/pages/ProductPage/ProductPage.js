import { Col, Row, Space } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ColorBox from '../../components/ColorBox/ColorBox';
import Counter from '../../components/Counter/Counter'
import './ProductPage.css'
import SizesContainer from "../../components/SizesContainer/SizesContainer";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { HeartOutlined } from "@ant-design/icons";

const ProductPage = () => {
	const { productId } = useParams();
	const [sizesState, setSizesState] = useState([]);
	const [activeImage, setActiveImage] = useState();
	const [counterValue, setCounterValue] = useState(1);
	const product = useSelector(state => state.products.data?.filter(value => parseInt(value.id) === parseInt(productId))[0])
	useEffect(() => {
		setActiveImage(`${product?.photo}1?set=set3`)
	}, [product])
	return (
		<>
			{
				!!product &&
				<div className={"product-page"}>
					<div className={"product-page-details"}>
						<Row justify={"space-between"}>
							<Col span={12}>
								<Row>
									<Col span={4}>
										<div className={"product-page-details-second-image-container"}>
											<img onClick={() => {
												setActiveImage(`${product.photo}1?set=set3`)
											}} src={`${product.photo}1?set=set3`} alt="" />
											<img onClick={() => {
												setActiveImage(`${product.photo}2?set=set3`)
											}} src={`${product.photo}2?set=set3`} alt="" />
											<img onClick={() => {
												setActiveImage(`${product.photo}3?set=set3`)
											}} src={`${product.photo}3?set=set3`} alt="" />
										</div>
									</Col>
									<Col span={18}>
										<img src={activeImage} alt="" />
									</Col>
								</Row>
							</Col>
							<Col span={12}>
								<h1>
									Women Black Checked Fit and Flare Dress
								</h1>
								<Space direction={'vertical'}>
									<p>Select Color</p>
									<Space>
										{
											product.color.map((value, index) => <ColorBox key={index} color={value}
												onClick={() => {

												}} />)
										}
									</Space>
								</Space>
								<Space direction={'vertical'}>
									<p>Select size (Inches)</p>
									<Space>
										<SizesContainer setSizesState={setSizesState} sizesState={sizesState} dataProductPage={product.size} />
									</Space>
								</Space>
								<Space direction={'horizontal'}>
									<Space direction={'vertical'}>
										<p>
											Quantity
										</p>
										<Counter counterValue={counterValue} setCounterValue={setCounterValue} />
									</Space>
									<Space direction={'vertical'}>
										<p>
											price total
										</p>
										<p>
											{(counterValue * product.price).toFixed(2)} EUR
										</p>
									</Space>
								</Space>
								<Space direction={'horizontal'}>
									<Button type={'primary'}>Add to bag</Button>
									<Button type={'icon'} icon={<HeartOutlined />}>Save</Button>
								</Space>
							</Col>
						</Row>
					</div>
				</div>
			}
		</>
	)
}
export default ProductPage
