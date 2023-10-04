import './App.css';
import { useState } from 'react';
import { Layout, Menu, message } from 'antd';
import UserList from './pages/UserList/UserList';
import AddUser from './pages/AddUser/AddUser';


function App() {
	const [messageApi, contextHolder] = message.useMessage();
	const success = (text) => {
		messageApi.open({
			type: 'success',
			content: text,
		});
	};
	const { Header, Content, Footer } = Layout;
	const [activePage, setActivePage] = useState(null);

	const menuItems = [
		{
			key: 'UsersList',
			label: 'Users',
		},
		{
			key: 'AddUser',
			label: 'Add users',
		},
	]

	function switchPages(page) {
		switch (page) {
			case 'AddUser': {
				return <AddUser success={success} setActivePage={setActivePage} />
			}
			case 'UsersList': {
				return <UserList success={success} />
			}
		}
	}
	return (
		<Layout className="layout" style={{ minHeight: '100vh' }}>
			{contextHolder}
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
						const page = switchPages(item.key)
						setActivePage(page)
					}}
				/>
			</Header>
			<Content
				style={{
					padding: '0 50px',
				}}
			>
				{activePage}
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




// <Row justify={"space-between"}>
// 	<Col span={18}>
//
// 	</Col>
// 	<Col span={4}>
// 		{
// 			!!activeUser.id &&
// 			<Space direction="vertical">
// 				<Card>
// 					<Typography.Text type={'secondary'}>{activeUser.id}</Typography.Text>
// 					<Typography.Title>{activeUser.username}</Typography.Title>
// 					<img src={activeUser.img} alt="" />
// 				</Card>
//
// 			</Space>

// 		}
// 	</Col>
// </Row >
