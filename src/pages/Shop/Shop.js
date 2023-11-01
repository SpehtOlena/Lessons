import { Col, Row, Typography, Space, Checkbox, Slider, Card, Divider, Select } from "antd";
import { Link } from "react-router-dom";
import SizeBox from "../../components/SizeBox/SizeBox.js";
import { brands, dressLengths, sizes, colors } from "../../structures";
import ColorBox from "../../components/ColorBox/ColorBox.js";
import { useEffect, useState } from "react";
import Button from '../../components/Button/Button.js';
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import './Shop.css'
import Meta from "antd/es/card/Meta.js";
import DeleteFilter from "../../components/DeleteFilter/DeleteFilter.js";
import SizesContainer from "../../components/SizesContainer/SizesContainer.js";
import Banner from "../../components/Banner/Banner.js";
import Rectangle71 from '../../assets/Rectangle71.png'

const Shop = () => {

	const [sliderValue, setSliderValue] = useState(500);
	const [brandsValues, setBrandsValues] = useState([]);
	const [sizeValues, setSizeValues] = useState([]);
	const [dressLengthValues, setDressLengthValues] = useState([]);
	const [colorsValues, setColorsValues] = useState([]);
	const [productWithFilter, setProductWithFilter] = useState([]);
	const [sizesState, setSizesState] = useState([]);
	const [showFilterItems, setShowFilterItems] = useState({
		brand: true,
		size: true,
		dress_length: true,
		color: true,
		price_range: true
	});

	const products = useSelector(state => state.products.data);

	useEffect(() => {
		setProductWithFilter(products)
	}, [products]);

	const applyFilter = () => {
		const filteredProducts = products.filter(product => {
			console.log("Product", product);

			const meetsSliderValue = product.price <= sliderValue;
			console.log("Meets Slider Value:", meetsSliderValue);

			const meetsBrands = brandsValues.length === 0 || brandsValues.includes(product.brand);
			console.log("Meets Brands:", meetsBrands);

			const meetsSizes = sizeValues.length === 0 || sizeValues.some(size => product.size.includes(size));
			console.log("Meets Sizes:", meetsSizes);

			const meetsDressLengths = dressLengthValues.length === 0 || dressLengthValues.some(length => product.dress_length.includes(length));
			console.log("Meets Dress Length:", meetsDressLengths);

			const meetsColors = colorsValues.length === 0 || colorsValues.some(color => product.color.includes(color));
			console.log("Meets Colors:", meetsColors);

			return meetsSliderValue && meetsBrands && meetsSizes && meetsDressLengths && meetsColors;
		});

		console.log("Filtered Products:", filteredProducts);
		setProductWithFilter(filteredProducts)
	}

	const changeShowFilterItem = (fieldName) => {
		setShowFilterItems({ ...showFilterItems, [fieldName]: !showFilterItems[fieldName] })
	}
	const onChangeSlider = (value) => {
		setSliderValue(value)
	}

	const resetAllFilter = () => {
		setSliderValue(500)
		setBrandsValues([])
		setSizeValues([])
		setDressLengthValues([])
		setColorsValues([])
	}
	const deleteOneElementFromFilter = (setFilters, filters, item, type) => {
		if (type) {
			setFilters(filters.map(value => {
				if (value.value === item) {
					return {
						value: item,
						active: false
					}
				} else {
					return {
						value: value.value,
						active: value.active
					}
				}
			}))
		} else {
			setFilters(filters.filter(value => value !== item))
		}

	}
	return (
		<>
			<Banner backgroundColor={'#F6F8FC'} image={Rectangle71} />
			<Row>
				<Col span={6} className={"side-bar"}>
					<Row>
						{
							(brandsValues.length || sizesState.filter(item => item.active).length || dressLengthValues.length || colorsValues.length) ?
								<div className={'shop-filter-box'}>
									<div className={'shop-filter-box-title'}>
										<Typography.Title level={2}>
											Filter
										</Typography.Title>

										<DeleteFilter onClick={resetAllFilter} children={'reset all'} />

									</div>
									{
										!!brandsValues.length &&
										<Space direction={'vertical'}>
											<Typography.Title level={4}>
												Brand:
											</Typography.Title>
											<Space size={'large'} wrap>
												{
													brandsValues.map((value, index) => <DeleteFilter
														key={index}
														onClick={() => deleteOneElementFromFilter(setBrandsValues, brandsValues, value)}
														children={value} />)
												}
											</Space>
										</Space>
									}
									{
										!!sizesState.filter(item => item.active).length &&
										<Space direction={'vertical'}>
											<Typography.Title level={4}>
												Size (Inches):
											</Typography.Title>
											<Space size={'large'} wrap>
												{
													sizesState.filter(item => item.active).map((item, index) => <DeleteFilter
														key={index}
														onClick={() => deleteOneElementFromFilter(setSizesState, sizesState, item.value, true)}
														children={item.value}
													/>)
												}
											</Space>
										</Space>
									}
									{
										!!dressLengthValues.length &&
										<Space direction={'vertical'}>
											<Typography.Title level={4}>
												Dress length:
											</Typography.Title>
											<Space size={'large'} wrap>
												{
													dressLengthValues.map((value, index) => <DeleteFilter
														key={index}
														onClick={() => deleteOneElementFromFilter(setDressLengthValues, dressLengthValues, value)}
														children={value} />)
												}
											</Space>
										</Space>
									}
									{
										!!colorsValues.length &&
										<Space direction={'vertical'}>
											<Typography.Title level={4}>
												Color:
											</Typography.Title>
											<Space size={'large'} wrap>
												{
													colorsValues.map((value, index) => <DeleteFilter
														key={index}
														onClick={() => deleteOneElementFromFilter(setColorsValues, colorsValues, value)}
													>
														<ColorBox onClick={() => { }} color={value} />
													</DeleteFilter>)
												}
											</Space>
										</Space>
									}
									{
										<Space direction={'vertical'}>
											<Typography.Title level={4}>
												Price Range:
											</Typography.Title>
											<DeleteFilter onClick={() => setSliderValue(500)}>
												<Space>
													{`0.00 EUR - ${sliderValue.toFixed(2)} EUR`}
												</Space>
											</DeleteFilter>
										</Space>
									}
								</div> : ''
						}

					</Row>
					<Space direction={"vertical"} style={{ width: "100%" }}>

						{/* Brand */}
						<Space direction={'vertical'} style={{ width: "100%", marginBottom: "60px" }}>
							<Row justify={'space-between'} align={"middle"}>
								<Typography.Title level={4}>
									Brand
								</Typography.Title>
								<div style={{ cursor: 'pointer' }} onClick={() => changeShowFilterItem('brand')}>
									{
										showFilterItems.brand ? <MinusOutlined /> : <PlusOutlined />
									}
								</div>
							</Row>
							{
								showFilterItems.brand &&
								<Checkbox.Group
									style={{ display: "flex", flexDirection: "column", gap: "20px 0", textTransform: "uppercase" }}
									value={brandsValues}
									options={brands.map((value) => {
										return {
											label: value,
											value: value,
										}
									})}
									onChange={(value) => setBrandsValues(value)}
								/>
							}
						</Space>

						{/* Sizes */}
						<Space direction={'vertical'} style={{ width: "100%", marginBottom: "60px" }}>
							<Row justify={'space-between'} align={"middle"}>
								<Typography.Title level={4}>
									Size (Inches)
								</Typography.Title>
								<div style={{ cursor: 'pointer' }} onClick={() => changeShowFilterItem('size')}>
									{
										showFilterItems.size ? <MinusOutlined /> : <PlusOutlined />
									}
								</div>
							</Row>
							<SizesContainer sizesState={sizesState} setSizesState={setSizesState} />
							{/* <Space wrap>
							{
								showFilterItems.size && sizes.map((value, index) =>
									<SizeBox
										sizeValues={sizeValues}
										onClick={(active) => {
											if (active) {
												setSizeValues([...sizeValues, value])
											} else {
												setSizeValues(sizeValues.filter(value1 => value1 !== value))
											}
										}}
										key={index}>
										{value}
									</SizeBox>)
							}
						</Space> */}
						</Space>

						{/* Dress Length */}
						<Space direction={'vertical'} style={{ width: "100%", marginBottom: "60px" }}>
							<Row justify={'space-between'} align={"middle"}>
								<Typography.Title level={4}>
									Dress length
								</Typography.Title>
								<div style={{ cursor: 'pointer' }} onClick={() => changeShowFilterItem('dress_length')}>
									{
										showFilterItems.dress_length ? <MinusOutlined /> : <PlusOutlined />
									}
								</div>
							</Row>
							{
								showFilterItems.dress_length &&
								<Checkbox.Group
									style={{ display: "flex", flexDirection: "column", gap: "20px 0", textTransform: "uppercase" }}
									value={dressLengthValues}
									options={dressLengths.map((value) => {
										return {
											label: value,
											value: value,
										}
									})}
									onChange={(value) => setDressLengthValues(value)}
								/>
							}
						</Space>

						{/* Color */}
						<Space direction={'vertical'} style={{ width: "100%", marginBottom: "60px" }}>
							<Row justify={'space-between'} align={"middle"}>
								<Typography.Title level={4}>
									Color
								</Typography.Title>
								<div style={{ cursor: 'pointer' }} onClick={() => changeShowFilterItem('color')}>
									{
										showFilterItems.color ? <MinusOutlined /> : <PlusOutlined />
									}
								</div>
							</Row>
							<Space wrap>
								{
									showFilterItems.color && colors.map((value, index) =>
										<ColorBox
											colorsValues={colorsValues}
											onClick={(active) => {
												if (active) {
													setColorsValues([...colorsValues, value])
												} else {
													setColorsValues(colorsValues.filter(value1 => value1 !== value))
												}
											}}
											key={index}
											color={value}
										>
										</ColorBox>)
								}
							</Space>
						</Space>

						{/* Price */}
						<Space direction={'vertical'} style={{ width: "100%" }}>
							<Row justify={'space-between'} align={"middle"}>
								<Typography.Title level={4}>
									Price Range
								</Typography.Title>
								<div style={{ cursor: 'pointer' }} onClick={() => changeShowFilterItem('price_range')}>
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
									<Slider defaultValue={500} value={sliderValue} onChange={onChangeSlider} min={0} max={500} step={0.01} />
								</div>
							}
						</Space>
						<Row justify={"end"}>
							<Button onClick={applyFilter}>Apply</Button>
						</Row>
					</Space>
				</Col>
				<Col span={18} className={'products_col'}>
					<Divider type={'vertical'} style={{ height: "100%", margin: '0 30px' }} />
					<div style={{ width: '100%' }}>
						<Row style={{ paddingBottom: 20 }} justify={'end'}>
							<Space>
								<Select
									defaultValue="lucy"
									style={{ width: 120 }}
									options={[
										{ value: 'jack', label: 'Jack' },
										{ value: 'lucy', label: 'Lucy' },
										{ value: 'Yiminghe', label: 'yiminghe' },
										{ value: 'disabled', label: 'Disabled', disabled: true },
									]}
								/>
								<Select
									defaultValue="12"
									style={{ width: 60 }}
									options={[
										{ value: '18', label: '18' },
										{ value: '12', label: '12' },
										{ value: '22', label: '22' },
										{ value: '48', label: '48', disabled: true },
									]}
								/>

							</Space>
						</Row>
						<Row className={'products_container'}>
							{
								productWithFilter.map((value, index) =>
									<Card
										className={'shop-card'}
										key={index}
										bordered={false}
										hoverable
										style={{ width: '23%', minWidth: '150px' }}
										cover={<img alt={value.name}
											src={value.photo} />}
									>
										<Meta title={value.name} description={<Space direction={'vertical'}>
											<Typography.Text type={'secondary'}>
												{value.short_description}
											</Typography.Text>
											<Typography.Text strong level={5}>
												{value.price.toFixed(2)} EUR
											</Typography.Text>
											<Space wrap>
												{
													value.color.map((value, index) => <ColorBox key={index} color={value}
														onClick={() => {

														}} />)
												}
											</Space>
										</Space>} />
									</Card>)
							}
						</Row>
					</div >
				</Col>
			</Row>
		</>
	)
}
export default Shop

