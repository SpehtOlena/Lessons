import { Avatar, Col, Divider, Row, Typography, Button, Input } from 'antd';
import { UserOutlined, ColumnHeightOutlined, FormOutlined, SaveFilled } from '@ant-design/icons';
import './postCard.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment';

const PostCard = ({ post, setPosts, posts, activeUser }) => {
	const [user, setUser] = useState([]);
	const [showComments, setShowComments] = useState(false);
	const [showAddComment, setShowAddComment] = useState(false);
	const [commentInputValue, setCommentInputValue] = useState(null);
	useEffect(() => {
		axios
			.get(`http://localhost:3000/users/${post.userId}`)
			.then((res) => setUser(res.data))
			.catch((error) => {
				console.log(error);
			})
	}, [])
	const handleAddPostComment = () => {
		axios
			.put(`http://localhost:3000/posts/${post.id}`, {
				...post, comments: [...post.comments, {
					body: commentInputValue,
					idUser: activeUser.id,
					imgUser: activeUser.img || null,
					username: activeUser.username
				}]
			})
			.then((res) => setPosts(posts.map((value) => {
				if (value.id === post.id) {
					return res.data
				} else {
					return value
				}
			})))
			.then(() => {
				setCommentInputValue('')
				setShowAddComment(false)
			})
			.catch((error) => {
				console.log(error);
			})
	}
	return (
		<div className={'post_card_container'}>
			<Row>
				<Col span={7}>
					{
						user.img ?
							<Avatar size={50} icon={<img src={user.img} alt={user.username} />} /> :
							<Avatar size={50} icon={<UserOutlined />} />
					}
				</Col>
				<Col span={16}>
					<Row>
						{user.username}
					</Row>
					<Row>
						<Typography.Title level={4}>{post.title}</Typography.Title>
					</Row>
					<Row>
						{post.body}
					</Row>
				</Col>
			</Row>
			{
				showComments &&
				<>
					<Divider />
					<Row>
						<ul>
							{
								post.comments.map((value, index) => (
									<li key={index} style={{ margin: '10px 0' }}>
										<Comment comment={value} />
									</li>
								))
							}
						</ul>
					</Row>
				</>
			}
			{
				showAddComment &&
				<>
					<Divider />
					<Input.TextArea value={commentInputValue} autoSize onChange={(e) => {
						setCommentInputValue(e.target.value)
					}} />
					<Button onClick={handleAddPostComment} style={{ margin: '20px 0px 0px auto', display: 'block' }} type={'primary'} icon={<SaveFilled />} />
				</>
			}
			<Divider />
			<Row justify={'space-between'}>
				<Button onClick={() => setShowComments(!showComments)} icon={<ColumnHeightOutlined />} />
				<Button onClick={() => setShowAddComment(!showAddComment)} icon={<FormOutlined />} />
			</Row>
		</div>
	)
}
export default PostCard