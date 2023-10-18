import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, Space, Row, Col } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import { HeartOutlined } from '@ant-design/icons';
import './App.css';
import ShopCardComponent from './components/ShopCardComponent/ShopCardComponent';
import { useEffect } from 'react';
import { axiosRequest } from './redux/actions';
import { useDispatch } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(axiosRequest('', 'products', ' '))
	}, []);
	const menuItems = [
		{
			label: <Link to={'/home'}>{'home'.toUpperCase()}</Link>,
			key: 'home',
		},
		{
			label: <Link to={'/shop'}>{'shop'.toUpperCase()}</Link>,
			key: 'shop',
		},
		{
			label: <Link to={'/blog'}>{'blog'.toUpperCase()}</Link>,
			key: 'blog',
		},
		{
			label: <Link to={'/sale'}>{'sale'.toUpperCase()}</Link>,
			key: 'sale',
		},
		{
			label: <Link to={'/contact_us'}>{'contact_us'.toUpperCase()}</Link>,
			key: 'contact_us',
		}
	];

	return (
		<Layout className={'App'}>
			<Header className={'App_header'}>
				<Row justify={'space-between'}>
					<Col span={2}>
						<span>Logo</span>
					</Col>
					<Col span={9}>
						<Menu mode={'horizontal'} items={menuItems} style={{ width: '100%' }} />
					</Col>
					<Col span={5}>
						<Space>
							<span>SIGN IN</span>
							<span>CREATE AN ACCOUNT</span>
						</Space>
					</Col>
					<Col span={4}>
						<Space>
							<HeartOutlined />
							<ShopCardComponent />
						</Space>
					</Col>
				</Row>
			</Header>
			<Content className={'app_container'}>
				<Outlet />
			</Content>
			<Footer>
				<Footer></Footer>
			</Footer>
		</Layout>

	)
}
export default App