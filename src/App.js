import { useState } from "react";
import { Layout, Menu, message } from "antd";
import { Header, Footer, Content } from "antd/es/layout/layout";
import UsersList from "./pages/UsersList/UsersList";
import AddUser from "./pages/AddUser/AddUser";

function App() {

	const [activePage, setActivePage] = useState();

	const menuItems = [
		{
			key: 'UsersList',
			label: 'Users',
		},
		{
			key: 'AddUser',
			label: 'Add user',
		}
	]

	const [messageApi, contextHolder] = message.useMessage();
	const success = (text) => {
		messageApi.open({
			type: 'success',
			content: text,
		});
	};

	function switchPages(page) {
		switch (page) {
			case 'AddUser': {
				return <AddUser setActivePage={setActivePage} messageApi={messageApi} success={success} />
			}
			case 'UsersList': {
				return <UsersList success={success} />
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
						setActivePage(switchPages(item.key))
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
//
// 			</Col>
// 			<Col span={4}>
// 				{
// 					!!activeUser.id &&
//

// 				}
// 			</Col>

// 		</Row>




