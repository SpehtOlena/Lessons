
import { Button, Form, Input, InputNumber } from 'antd';
import './App.css';
import FormS from './FormS/FormS';
import { useForm } from 'antd/es/form/Form';
import { ErrorMessage, Field, Formik } from 'formik';
import { FormikMaterial } from './FormS/FormikMaterial';
import { useState } from 'react';
import CustomMenu from './CustomMenu/CustomMenu';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';


function App() {

	const [activePage, setActivePage] = useState();
	const [data, setData] = useState([]);
	const menuItems = [
		{
			label: 'test1',
			component: <div style={{ display: 'flex', flexDirection: 'row', gap: 15, width: '100%', justifyContent: 'space-around', flexWrap: 'wrap' }}>
				{
					!!data.length && data.map((value, index) =>
						<Card key={index} sx={{ width: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="240"
									image={value.photo}
									alt={value.name}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{value.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{value.description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>)
				}
			</div>
		},
		{
			label: 'form',
			component: <FormikMaterial data={data} setData={setData} />
		}
	]


	// >Форми з Antd
	const onFinish = (values) => {
		console.log(values);
	}
	const [form] = useForm()

	// Formik
	const initialValues = {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		age: ""
	}
	const validate = (values) => {
		const errors = {}
		if (!values.name) {
			errors.name = "Name is required!"
		}
		if (!values.email) {
			errors.email = "Email is required!"
		} else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(values.email)) {
			errors.email = "Invalid email address!"
		}
		if (!values.password) {
			errors.password = "Password is required!"
		}
		if (values.password !== values.confirmPassword) {
			errors.confirmPassword = "Password do not match!"
		}
		if (!values.age) {
			errors.age = "Age is required!"
		} else if (isNaN(values.age) || parseInt(values.age) <= 0) {
			errors.age = "Invalid age"
		}
		return errors
	}
	const handleSubmit = (values) => {
		console.log(values);
	}




	return (
		<div className="App">
			<div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-around' }} >
				<CustomMenu setActivePage={setActivePage} menuItems={menuItems} />
				{activePage}
			</div>

			<h1>form, formik, Antd Form</h1>
			<hr />
			<h2>Прості форми</h2>
			<FormS />

			<hr />
			<h2>Форми з Antd</h2>
			<div>
				<Form
					name={'Test_form'}
					onFinish={onFinish}
					style={{ width: 700, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
					form={form}
				>
					<Form.Item
						name={'username'}
						label={'User name'}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Ім'я є обов'язковим"
							}
						]}
					>
						<Input addonAfter={'Name'} />
					</Form.Item>
					<Form.Item
						name={'email'}
						label={'Email'}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Email є обов'язковим"
							},
							{
								type: "email",
								message: "Емейл не є валідним"
							}
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={'password'}
						label={'Password'}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Пароль є обов'язковим"
							}
						]}

					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						name={'confirmPassword'}
						label={'Confirm Password'}
						dependencies={['password']}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Пароль є обов'язковим"
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error('Паролі не співпадають!'));
								},
							}),
						]}

					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						name={'age'}
						label={'Age'}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Вік є обов'язковим"
							}
						]}
					>
						<InputNumber min={0} />
					</Form.Item>
					<Form.Item>
						<Button
							type={'primary'}
							htmlType={'submit'}>
							Submit
						</Button>
					</Form.Item>
					<Button onClick={() => form.resetFields()}>Reset Form</Button>
				</Form>
			</div>
			<Button onClick={() => form.submit()}>Test</Button>


			<hr />
			<h2>Formik</h2>
			{/* npm instal formik */}
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={handleSubmit}
			>
				<Form>
					<div>
						<label>Name</label>
						<Field type={'text'} name={'name'} />
						<ErrorMessage name={'name'} component={'div'} />
					</div>
					<div>
						<label>Email</label>
						<Field type={'text'} name={'email'} />
						<ErrorMessage name={'email'} component={'div'} />
					</div>
					<div>
						<label>Password</label>
						<Field type={'password'} name={'password'} />
						<ErrorMessage name={'password'} component={'div'} />
					</div>
					<div>
						<label>Confirm Password</label>
						<Field type={'password'} name={'confirmPassword'} />
						<ErrorMessage name={'confirmPassword'} component={'div'} />
					</div>
					<div>
						<label>Age</label>
						<Field type={'number'} name={'age'} />
						<ErrorMessage name={'age'} component={'div'} />
					</div>
					<button type={'submit'}>Submit</button>
				</Form>
			</Formik>


			<hr />
			<h2>Formik + Material UI</h2>
			{/* <FormikMaterial /> */}
		</div >
	);
}


// 30:16
export default App;
