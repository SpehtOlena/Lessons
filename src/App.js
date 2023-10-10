import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosRequest } from "./redux/actions";
import { Button, Card, Col, Form, Input, Row, Space, Typography, Layout, Menu, theme } from "antd";
import { Header, Footer, Content } from "antd/es/layout/layout";
import { useForm } from "antd/es/form/Form";
import UsersList from "./pages/UsersList/UsersList";
import AddUser from "./pages/AddUser/AddUser";

function App() {

	const [form] = useForm();
	const [activePage, setActivePage] = useState();
	const dispatch = useDispatch();
	const users = useSelector(state => state.users.data);
	const [activeUser, setActiveUser] = useState({});

	useEffect(() => {
		dispatch(axiosRequest('', 'users', ''))
	}, []);

	useEffect(() => {
		form.setFieldsValue(activeUser)
	}, [activeUser]);

	const menuItems = [
		{
			key: 'UsersList',
			label: 'Users',
			element: <UsersList />
		},
		{
			key: 'AddUser',
			label: 'Add user',
			element: <AddUser />
		}
	]
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const callback = (value) => {
		setActiveUser(value)
	}

	return (
		<Layout className="layout" style={{ minHeight: '100vh' }}>
			<Header
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div className="demo-logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					items={menuItems}
					style={{ width: '100%' }}
					onClick={(item) => {
						console.log(item);
					}}
				/>
			</Header>
			<Content
				style={{
					padding: '0 50px',
				}}
			>
				<div className="site-layout-content">
					{activePage}
				</div>
			</Content>
			<Footer
				style={{
					textAlign: 'center',
				}}
			>
				Ant Design ©2023 Created by Ant UED
			</Footer>
		</Layout>

	);
}

export default App;

// <Row justify={'space-between'}>
// 			<Col span={18}>
// 				<Space wrap>
// 					{
// 						users.map(value => (
// 							<Card onClick={() => callback(value)} key={value.id} style={{ cursor: 'pointer' }}>
// 								<Typography.Text code>{value.id}</Typography.Text>
// 								<Typography.Title>{value.username}</Typography.Title>
// 								<img src={value.img} alt="" />
// 							</Card>
// 						))
// 					}
// 				</Space>
// 			</Col>
// 			<Col span={4}>
// 				{
// 					!!activeUser.id &&
// 					<Form
// 						name="basic"
// 						form={form}
// 						onFinish={onFinish}
// 						onFinishFailed={onFinishFailed}
// 						initialValues={activeUser}>
// 						<Form.Item
// 							name={'username'}
// 							label={'username'}>
// 							<Input />
// 						</Form.Item>
// 						<Form.Item
// 							name={'password'}
// 							label={'password'}>
// 							<Input.Password />
// 						</Form.Item>
// 						<Form.Item>
// 							<Button type={'primary'}>Submit</Button>
// 						</Form.Item>
// 					</Form>

// 				}
// 			</Col>

// 		</Row>




