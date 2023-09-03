import { Form, Input, Button, InputNumber, Divider, Row } from "antd";
import './AntdForm.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";

const AntdForm = ({ edit, initialData, setData, globalData }) => {
	const [initialValues, setInitialValues] = useState(null);
	const [form] = useForm()
	useEffect(() => {
		if (edit) {
			form.setFieldsValue({
				"name": initialData.name,
				"username": initialData.username,
				"email": initialData.email,
				"street": initialData.address.street,
				"suite": initialData.address.suite,
				"city": initialData.address.city,
				"zipcode": initialData.address.zipcode,
				"phone": initialData.phone,
				"website": initialData.website,
				"company_name": initialData.company.name,
				"catchPhrase": initialData.company.catchPhrase,
				"bs": initialData.company.bs
			})
		} else {
			form.setFieldsValue({
				"name": '',
				"username": '',
				"email": '',
				"street": '',
				"suite": '',
				"city": '',
				"zipcode": '',
				"phone": '',
				"website": '',
				"name": '',
				"catchPhrase": '',
				"bs": '',
			})
		}
	}, [initialData, edit])
	const onFinish = (values) => {
		const data = {
			"name": values.name,
			"username": values.username,
			"email": values.email,
			"address": {
				"street": values.street,
				"suite": values.suite,
				"city": values.city,
				"zipcode": values.zipcode,
			},
			"phone": values.phone,
			"website": values.website,
			"company": {
				"name": values.company_name,
				"catchPhrase": values.catchPhrase,
				"bs": values.bs
			}
		}
		if (!!edit) {
			axios.put(`http://localhost:3000/users/${initialData.id}`, data)
				.then((res) =>
					setData(globalData.map((value) => {
						if (value.id === res.data.id) {
							return res.data
						} else {
							return value
						}
					}))

				)
		} else {
			axios.post('http://localhost:3000/users', data)
				.then((res) => setData([...globalData, res.data]))
		};
	}

	const deleteItem = () => {
		axios.delete(`http://localhost:3000/users/${initialData.id}`)
			.then((res) =>
				setData(globalData.filter((value) =>
					value.id !== initialData.id))
			)
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div>
			<Form
				form={form}
				name="basic"
				style={{
					maxWidth: 600,
				}}

				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[
						{
							required: true,
							message: 'Please input your name!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: 'Please input your email!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Phone"
					name="phone"
					rules={[
						{
							required: true,
							message: 'Please input your phone!',
						},
					]}
				>
					<Input addonBefore={'+38'} />
				</Form.Item>

				<Form.Item
					label="Website"
					name="website"
					rules={[
						{
							required: true,
							message: 'Please input your website!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Divider />
				<h3>Address</h3>
				<Form.Item
					label="Street"
					name="street"
					rules={[
						{
							required: true,
							message: 'Please input your street!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Suite"
					name="suite"
					rules={[
						{
							required: true,
							message: 'Please input your suite!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="City"
					name="city"
					rules={[
						{
							required: true,
							message: 'Please input your Webcitysite!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Zipcode"
					name="zipcode"
					rules={[
						{
							required: true,
							message: 'Please input your zipcode!',
						},
					]}
				>
					<InputNumber />
				</Form.Item>


				<h3>Company</h3>
				<Form.Item
					label="Company name"
					name="company_name"
					rules={[
						{
							required: true,
							message: 'Please input your company name!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Catch phrase"
					name="catchPhrase"
					rules={[
						{
							required: true,
							message: 'Please input your catch phrase!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Bs"
					name="bs"
					rules={[
						{
							required: true,
							message: 'Please input your bs!',
						},
					]}
				>
					<Input />
				</Form.Item>


				<Form.Item>
					<Row justify={"space-between"}>
						<Button onClick={deleteItem} danger type="primary">
							Delete
						</Button>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Row>
				</Form.Item>
			</Form>
		</div >
	)
}
export default AntdForm

// 55