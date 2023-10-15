import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import { Outlet, useLocation } from 'react-router';
import { HomeOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/home')
		}
	}, []);
	const pathSnippets = location.pathname.split('/').filter((i) => i);
	const extraBreadcrumbItems = pathSnippets.map((value, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		return {
			key: url,
			title: <Link to={url}>{value}</Link>,
		};
	});
	const breadcrumbItems = [
		{
			title: <Link to="/">root</Link>,
			key: 'home',
		},
	].concat(extraBreadcrumbItems);
	const items = [
		{
			label: <Link to={'/home'}>Home</Link>,
			key: 'home',
			icon: <HomeOutlined />,
		},
		{
			label: <Link to={'/users'}>Users</Link>,
			key: 'users',
			icon: <UserOutlined />,
		},
		{
			label: <Link to={'/support'}>Support</Link>,
			key: 'support',
			icon: <TeamOutlined />,

		}

	];
	return (
		<Layout style={{ width: '100wv', minHeight: '100vh' }}>
			<Header style={{ color: 'white' }}>
				<Menu
					selectedKeys={[location.pathname.split('/')[1]]}
					defaultSelectedKeys={[location.pathname.split('/')[1]]}
					mode="horizontal"
					items={items} theme={'dark'} />
			</Header>
			<Content style={{ padding: "20px 50px" }}>
				<Breadcrumb items={breadcrumbItems} />
				<Outlet />
			</Content>
			<Footer style={{ color: 'white', background: '#001529' }}>Footer</Footer>
		</Layout>
	)
}
export default App

// 37