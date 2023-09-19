import { Button, Form, Input, Typography, Avatar, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const Profile = ({ activeUser, setActiveUser }) => {
	const onFinish = (values) => {
		axios
			.put(`http://localhost:3000/users/${activeUser.id}`, values)
			.then((res) => setActiveUser(res.data))
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div>
			<Row justify={'space-around'} aling={'middle'} style={{ width: '30%', margin: "50px auto" }}>
				{
					activeUser.img ?
						<Avatar size={100} icon={<img src={activeUser.img} alt={activeUser.username} />} /> :
						<Avatar size={100} icon={<UserOutlined />} />
				}
				<Typography.Title>{activeUser.username.toUpperCase()}</Typography.Title>
			</Row>
			<Form
				name="profile_user"
				initialValues={activeUser}
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


				<Form.Item
					label="Image"
					name="img"
					rules={[
						{
							required: true,
							message: 'Please input your image!',
						},
					]}
				>
					<Input addonAfter={'url'} />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Edit
					</Button>
				</Form.Item>
			</Form>
		</div>

	)
}
export default Profile