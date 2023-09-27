import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Button, Card, Space, Row, Col, Typography, Divider, Spin } from 'antd';
import { decrement, increment, getUsers, getUser, getPosts, getPost, loading } from './redux/actions';
import { useEffect } from 'react';

function App() {

	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.data);
	const users = useSelector(state => state.users.data);
	const user = useSelector(state => state.users.item)
	const posts = useSelector(state => state.posts.data);
	const post = useSelector(state => state.posts.item);
	const loadingUsers = useSelector(state => state.users.loading)
	const error = useSelector(state => state.users.error)

	useEffect(() => {
		dispatch(getUsers())
		dispatch(getPosts())
	}, [])
	return (
		<div className="App">
			<Space>
				<Button onClick={() => dispatch(decrement(counter))}>-</Button>
				{counter}
				<Button onClick={() => dispatch(increment(counter))}>+</Button>
			</Space>

			<br />
			<br />
			<br />

			<Space wrap>
				{
					users.map(value =>
						<Card key={value.id}>
							{value.username}
						</Card>)
				}
			</Space>
			<br />
			<br />
			<br />
			<hr />
			<hr />
			<br />
			<br />
			<br />
			<Divider>Users</Divider>
			<Row>
				<Col span={20}>
					<Space wrap>
						{
							loadingUsers ?
								<Spin /> :
								users.map(value =>
									<Card key={value.id} onClick={() => dispatch(getUser(value))} style={{ cursor: 'pointer' }}>
										{value.username}
									</Card>)
						}
						{
							!!error &&
							error.message
						}
					</Space>
				</Col>
				<Col span={4}>
					<Card>
						<Typography.Title>
							{user.username}
							<img src={user.img} alt="" />
						</Typography.Title>
					</Card>
				</Col>
			</Row>
			<br />
			<br />
			<br />
			<hr />
			<hr />
			<br />
			<br />
			<br />
			<Divider>Posts</Divider>
			<Row>
				<Col span={20}>
					<Space wrap>
						{
							posts.map(value =>
								<Card key={value.id} onClick={() => dispatch(getPost(value))} style={{ cursor: 'pointer' }}>
									{value.title}
								</Card>)
						}
					</Space>
				</Col>
				<Col span={4}>
					<Card>
						<Typography.Title>
							{post.title}
						</Typography.Title>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default App;


