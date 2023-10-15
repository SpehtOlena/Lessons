import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { axiosRequest, clearError } from "../../redux/actions";
import { Button, Col, Descriptions, Row, Space } from "antd";

const UserPage = () => {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(state => state.users.item);
	const error = useSelector(state => state.users.error)
	useEffect(() => {
		dispatch(axiosRequest({ id: userId }, 'users', 'get'))
	}, []);
	useEffect(() => {
		if (!!error) {
			dispatch(clearError())
			navigate('*')
		}
	})

	return (
		<>
			{
				!!user.id &&
				<Row>
					<Col span={8}>
						<img src={user.img} alt="" />
					</Col>
					<Col span={16}>
						<Descriptions
							title={
								<Space>
									<span>{`User №${user.id}`}</span>
									<Button
										onClick={
											() => dispatch(axiosRequest(user, 'users', 'delete'))
												.then(() => {
													navigate('/users')
												})
										}
										danger type={'text'}>Delete</Button>
								</Space>
							}
							layout="vertical">
							<Descriptions.Item label="UserName">{user.username}</Descriptions.Item>
							<Descriptions.Item label="Password">{user.password}</Descriptions.Item>
						</Descriptions>
					</Col>
				</Row>
			}
			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Link to={'/users'}>
					<Button type={'primary'}>Go back!</Button>
				</Link>
			</div>
		</>
	)
}
export default UserPage

// 1:15