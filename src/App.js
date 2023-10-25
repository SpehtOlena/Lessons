import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, Space, Row, Col } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import { HeartOutlined, SearchOutlined } from '@ant-design/icons';
import './App.css';
import ShopCardComponent from './components/ShopCardComponent/ShopCardComponent';
import { useEffect } from 'react';
import { axiosRequest } from './redux/actions';
import { useDispatch } from 'react-redux';
import Logo from './assets/Logo.svg'
import ShopIcon from './components/ShopIcon/ShopIcon';

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
			<Header className={'app_header'}>
				<Link to={'/home'} className={'app_header-link'}>
					<img src={Logo} alt="logo" />
				</Link>
				<Menu className={'app_header-menu'} mode={'horizontal'} items={menuItems} />
				<div className={'app_header-search'}>
					<SearchOutlined style={{ fontSize: 18 }} />
					Search
				</div>
				<div className={'app_header-links'}>
					<Link to={'/Login'}>
						Sign in
					</Link>
					<Link to={'/Registration'}>
						Create an accont
					</Link>
				</div>
				<div className={'app_header-icons'}>
					<HeartOutlined style={{ fontSize: 18 }} />
					<ShopIcon />
				</div>
			</Header>
			<Content className={'app_container'}>
				<Outlet />
			</Content>
			<Footer>
				<Footer>Footer</Footer>
			</Footer>
		</Layout>

	)
}
export default App