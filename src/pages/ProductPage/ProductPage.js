import { HeartOutlined } from "@ant-design/icons"
import { Button, Col, Row, Space, Typography } from "antd"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from "react"
import InputCounter from "../../components/InputCounter/InputCounter"

const ProductPage = () => {
	const { productId } = useParams();
	const [inputCountValue, setInputCountValue] = useState(1);
	const product = useSelector(state => state.products.data.find(value => value.id === Number(productId)))
	return (
		<>
			{
				!!productId && <Row justify={'space-between'}>
					<Col span={8}>
						<img style={{ width: '100%' }} src={product.image} alt={product.title} />
					</Col>
					<Col span={8}>
						<Space direction={'vertical'}>
							<Typography.Title>{product.title}</Typography.Title>
							<Row>
								<Col span={10}>
									<Space direction={'vertical'}>
										<div>
											Quantity
										</div>
										<div>
											<InputCounter inputCountValue={inputCountValue} setInputCountValue={setInputCountValue} />
										</div>
									</Space>
								</Col>
								<Col span={10}>
									<Space direction={'vertical'}>
										<div>
											price total
										</div>
										<div>
											{
												inputCountValue * product.price
											} $
										</div>
									</Space>
								</Col>
							</Row>
							<Space>
								<Button type={'primary'}>Add to bag</Button>
								<Button icon={<HeartOutlined />}>Save</Button>
							</Space>
						</Space>
					</Col>
				</Row>
			}
		</>
	)
}
export default ProductPage