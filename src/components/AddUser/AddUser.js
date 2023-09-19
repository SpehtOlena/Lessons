import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import './addUser.css'



const AddUser = ({ activeUser, setActiveUser }) => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:3000/users')
			.then((res) => setUsers(res.data))
			.catch((error) => {
				console.log(error);
			})
	}, [])
	const onFinish = (values) => {
		const testUser = users.find((value) => value.username === values.username)
		if (!!testUser) {
			if (testUser.password === values.password) {
				setActiveUser(testUser)
			} else {
				console.log('error password')
			}
		} else {
			axios
				.post('http://localhost:3000/users', values)
				.then(res => setActiveUser(res.data))
		}
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Form
			className={'form'}
			name="basic"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
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
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item className={'button_submit_container'}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}
export default AddUser