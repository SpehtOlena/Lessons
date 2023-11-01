import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, Space, Row, Col, Typography, Input, Button, Divider, Affix, FloatButton } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import { HeartOutlined, SearchOutlined } from '@ant-design/icons';
import './App.css';
import { useEffect } from 'react';
import { axiosRequest } from './redux/actions';
import { useDispatch } from 'react-redux';
import Logo from './assets/Logo.svg'
import ShopIcon from './components/ShopIcon/ShopIcon';
import { BsCheck2 } from "react-icons/bs";
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from "@ant-design/icons";


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
			<Affix>
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
							Create an account
						</Link>
					</div>
					<div className={'app_header-icons'}>
						<HeartOutlined style={{ fontSize: 18 }} />
						<ShopIcon />
					</div>
				</Header>
			</Affix>
			<Content className={'app_container'}>
				<Outlet />
			</Content>
			<div className={'pre-footer'}>
				<div>
					<Space>
						<BsCheck2 />
						Duties and Taxes Guaranteed
					</Space>
				</div>
				<div>
					<Space>
						<BsCheck2 />
						Free Express Shipping
					</Space>
				</div>
				<div>
					<Space>
						<BsCheck2 />
						Customer Love
					</Space>
				</div>
				<div>
					<Space>
						<BsCheck2 />
						Easy Returns
					</Space>
				</div>
				<div>
					<Space>
						<BsCheck2 />
						Secure Payment
					</Space>
				</div>
			</div>
			<Footer className={'app-footer'}>
				<Row>
					<Col span={3}>
						<Link to={'/home'}>
							<img src={Logo} alt="logo" />
						</Link>
					</Col>
					<Col span={3}>
						<Typography.Title level={5}>features</Typography.Title>
						<ul>
							<li>men</li>
							<li>Women</li>
							<li>boys</li>
							<li>girls</li>
							<li>new arrivals</li>
							<li>shoes</li>
							<li>clothes</li>
							<li>accessories</li>
						</ul>
					</Col>
					<Col span={3}>
						<Typography.Title level={5}>Menu</Typography.Title>
						<ul>
							<li><Link to={'/about_us'}>{"About us"}</Link></li>
							<li><Link to={'/contact_us'}>{"contact us"}</Link></li>
							<li><Link to={'/my_account'}>{"my account"}</Link></li>
							<li><Link to={'/orders_history'}>{"orders history"}</Link></li>
							<li><Link to={'/my_wishlist'}>{"MY WISHLIST"}</Link></li>
							<li><Link to={'/blog'}>{"blog"}</Link></li>
							<li><Link to={'/login'}>{"LOGIN"}</Link></li>
						</ul>
					</Col>
					<Col span={5}>
						<Typography.Title level={5}>contact us</Typography.Title>
						<ul>
							<li>
								<Typography.Text strong>
									Address: </Typography.Text>
								123 STREET NAME, CITY, ENGLAND
							</li>
							<li>
								<Typography.Text strong>
									Phone: </Typography.Text>
								(123) 456-7890
							</li>
							<li>
								<Typography.Text strong>
									email: </Typography.Text>
								MAIL@EXAMPLE.COM
							</li>
							<li>
								<Typography.Text strong>
									working days/hours </Typography.Text>
								MON - SUN / 9:00AM - 8:00PM
							</li>
						</ul>
					</Col>
					<Col span={4}>
						<Typography.Title level={5}>follow us</Typography.Title>
						<ul>
							<li>
								<div>
									<FacebookFilled /> FACEBOOK
								</div>
							</li>
							<li>
								<div>
									<TwitterSquareFilled /> TWITTER
								</div>
							</li>
							<li>
								<div>
									<InstagramFilled /> INSTAGRAM
								</div>
							</li>
						</ul>
					</Col>
					<Col span={6}>
						<Typography.Title level={5}>join us</Typography.Title>
						<ul>
							<li>
								Subscribe to our newsletters
							</li>
							<li>
								<Input placeholder={'Email Address'} id="name01" />
							</li>
							<li>
								<Button>Subscribe!</Button>
							</li>
						</ul>
					</Col>
				</Row>
				<Divider style={{ backgroundColor: "#4F4F4F" }} />
				<Row>
					<Typography.Text style={{ textTransform: "uppercase" }}>© 2023. Crisp Developed by
						NMatiukh</Typography.Text>
				</Row>
			</Footer>
			<FloatButton.BackTop />
		</Layout>

	)
}
export default App

// 1:18