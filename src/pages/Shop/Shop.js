import { Col, Row, Typography, Space, Checkbox, Slider } from "antd";
import SizeBox from "../../components/SizeBox/SizeBox.js";
import { brands, dressLengths, sizes, colors } from "../../structures";
import ColorBox from "../../components/ColorBox/ColorBox.js";
import { useState } from "react";
import Button from '../../components/Button/Button.js';
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const Shop = () => {
	const [sliderValue, setSliderValue] = useState(0);
	const [showFilterItems, setShowFilterItems] = useState({
		brand: false,
		size: false,
		dress_length: false,
		color: false,
		price_range: false
	});
	const changeShowFilterItem = (fieldName) => {
		setShowFilterItems({ ...showFilterItems, [fieldName]: !showFilterItems[fieldName] })
	}
	const onChangeSlider = (value) => {
		setSliderValue(value)
	}
	return (
		<Row>
			<Col span={6}>
				<Space direction={"vertical"} style={{ width: "100%" }}>
					<Space direction={'vertical'} style={{ width: "100%" }}>
						<Row justify={'space-between'} align={"middle"}>
							<Typography.Title level={5}>
								Brand
							</Typography.Title>
							<div onClick={() => changeShowFilterItem('brand')}>
								{
									showFilterItems.brand ? <MinusOutlined /> : <PlusOutlined />
								}
							</div>
						</Row>
						{
							showFilterItems.brand && brands.map((value, index) => <Checkbox key={index}>{value}</Checkbox>)
						}
					</Space>
					<Space direction={'vertical'} style={{ width: "100%" }}>
						<Row justify={'space-between'} align={"middle"}>
							<Typography.Title level={5}>
								Size (Inches)
							</Typography.Title>
							<div onClick={() => changeShowFilterItem('size')}>
								{
									showFilterItems.size ? <MinusOutlined /> : <PlusOutlined />
								}
							</div>
						</Row>
						<Space wrap>
							{
								showFilterItems.size && sizes.map((value, index) => <SizeBox key={index}>{value}</SizeBox>)
							}
						</Space>
					</Space>
					<Space direction={'vertical'} style={{ width: "100%" }}>
						<Row justify={'space-between'} align={"middle"}>
							<Typography.Title level={5}>
								Dress length
							</Typography.Title>
							<div onClick={() => changeShowFilterItem('dress_length')}>
								{
									showFilterItems.dress_length ? <MinusOutlined /> : <PlusOutlined />
								}
							</div>
						</Row>
						{
							showFilterItems.dress_length && dressLengths.map((value, index) => <Checkbox key={index}>{value}</Checkbox>)
						}
					</Space>
					<Space direction={'vertical'} style={{ width: "100%" }}>
						<Row justify={'space-between'} align={"middle"}>
							<Typography.Title level={5}>
								Color
							</Typography.Title>
							<div onClick={() => changeShowFilterItem('color')}>
								{
									showFilterItems.color ? <MinusOutlined /> : <PlusOutlined />
								}
							</div>
						</Row>
						<Space wrap>
							{
								showFilterItems.color && colors.map((value, index) => <ColorBox key={index} color={value} />)
							}
						</Space>
					</Space>
					<Space direction={'vertical'} style={{ width: "100%" }}>
						<Row justify={'space-between'} align={"middle"}>
							<Typography.Title level={5}>
								Price Range
							</Typography.Title>
							<div onClick={() => changeShowFilterItem('price_range')}>
								{
									showFilterItems.price_range ? <MinusOutlined /> : <PlusOutlined />
								}
							</div>
						</Row>
						{showFilterItems.price_range &&
							<div style={{ width: "100%" }}>
								<Row justify={"space-between"}>
									<Col>
										0.00 EUR
									</Col>
									<Col>
										{`${sliderValue.toFixed(2)} EUR`}
									</Col>
								</Row>
								<Slider onChange={onChangeSlider} min={0} max={500} step={0.01} />
							</div>
						}
					</Space>
					<Row justify={"end"}>
						<Button>Apply</Button>
					</Row>
				</Space>
			</Col>
			<Col span={18}>
			</Col>
		</Row>
	)
}
export default Shop