import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Layout, Row, Col, Divider } from 'antd';
import { Header, Footer, Content } from 'antd/es/layout/layout';
import Posts from "./../pages/Posts/Posts";
import AddPosts from '../pages/AddPosts/AddPosts';
import Profile from './../pages/Profile/Profile';
import Menu from '../Menu/Menu';

const Body = ({ activeUser, setActiveUser }) => {
	const [activePage, setActivePage] = useState(null);
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:3000/posts')
			.then((res) => setPosts(res.data))
			.catch((error) => {
				console.log(error);
			})
	}, [])
	const menuItems = [
		{
			label: 'Posts',
			components: <Posts posts={posts} setPosts={setPosts} activeUser={activeUser} />
		},
		{
			label: 'Add Posts',
			components: <AddPosts activeUser={activeUser} posts={posts} setPosts={setPosts} />
		},
		{
			label: 'Profile',
			components: <Profile activeUser={activeUser} setActiveUser={setActiveUser} />
		}
	]
	return (
		<Layout style={{ width: '100%', height: '100vh' }}>
			<Header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: 'white', alignItems: 'center' }}>
				<h1 style={{ fontSize: 33, cursor: "pointer" }} onClick={() => setActivePage(<Profile activeUser={activeUser} setActiveUser={setActiveUser} />)}>{activeUser.username.toUpperCase()}</h1>
				<Menu menuItems={menuItems} setActivePage={setActivePage} />
				<Button onClick={() => setActiveUser(null)} danger type={"primary"}>Exit</Button>
			</Header>
			<Content style={{ padding: '20px 40px', width: '100%' }}>
				{activePage}
			</Content>
			<Footer style={{ backgroundColor: '#001628', color: '#FDFDFD' }}>
				<Divider />
				<Row justify={'space-between'}>
					<Col>
						© 2023 website for me :)
					</Col>
					<Col>
						Active user: {activeUser.username.toUpperCase()}
					</Col>
				</Row>
			</Footer>
		</Layout>
	)
}
export default Body