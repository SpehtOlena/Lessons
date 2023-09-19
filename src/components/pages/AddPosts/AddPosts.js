import { Button, Form, Input } from 'antd';
import axios from 'axios';

const AddPosts = ({ activeUser, posts, setPosts }) => {
	const onFinish = (values) => {
		axios
			.post('http://localhost:3000/posts', { ...values, userId: activeUser.id, comments: [] })
			.then(res => setPosts([...posts, res.data]))
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Form
			name="add_post"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			style={{
				maxWidth: 600,
			}}
		>
			<Form.Item
				label="Title"
				name="title"
				rules={[
					{
						required: true,
						message: 'Please input your title!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Body"
				name="body"
				rules={[
					{
						required: true,
						message: 'Please input your body!',
					},
				]}
			>
				<Input.TextArea autoSize={{
					minRows: 3,
					maxRows: 10,
				}} />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Save
				</Button>
			</Form.Item>
		</Form>
	)
}
export default AddPosts