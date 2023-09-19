import { Avatar, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Comment = ({ comment }) => {
	return (
		<>
			<Row>
				{
					comment.imgUser ?
						<Avatar size={30} icon={<img src={comment.imgUser} alt={comment.username} />} /> :
						<Avatar size={30} icon={<UserOutlined />} />
				}
				<span>{comment.username}</span>
			</Row>
			<Row>
				{
					comment.body
				}
			</Row>
		</>
	)
}
export default Comment