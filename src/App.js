import './App.css';
import { Button, Row, Space, Layout, Menu } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

const App = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === '/') {
			navigate('home')
		}
	}, []);
	const { Header, Footer, Content } = Layout;
	const items = [
		{
			label: <Link to={'home'}>Home</Link>,
			key: 'home',
			icon: <HomeOutlined />,
		},
		{
			label: <Link to={'users'}>Users</Link>,
			key: 'users',
			icon: <UserOutlined />,
		}
	]
	return (
		<div className={'App'}>

			<Layout style={{ width: '100vw', minHeight: '90vh' }}>
				<Header style={{ color: "white" }}>
					<Menu defaultSelectedKeys={[location.pathname.split('/')[1]]} mode="horizontal" items={items} theme={'dark'} />
				</Header>
				<Content style={{ padding: '20px 50px' }}>
					<Outlet />
				</Content>
				<Footer style={{ color: "white", background: '#001529' }}>Footer</Footer>
			</Layout>

		</div>
	)
}
export default App