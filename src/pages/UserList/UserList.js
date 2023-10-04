import { Space, Typography, Card, Drawer, Button, Row, Col, Form, Input, Popconfirm } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { axiosRequest } from "../../redux/actions";
import { useEffect, useState } from 'react';
import { useForm } from "antd/es/form/Form";

const UserList = ({ success }) => {
	const [open, setOpen] = useState(false);
	const [activeUser, setActiveUser] = useState(null);
	const [form] = useForm();
	useEffect(() => {
		form.setFieldsValue(activeUser)
	}, [activeUser])
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	const dispatch = useDispatch();
	const onFinish = (values) => {
		dispatch(axiosRequest({ ...values, id: activeUser.id }, 'Users', 'put'));
		success(`${activeUser.username} is edit and has name ${values.username}`)
		onClose();
	};
	const users = useSelector(state => state.users.data);
	useEffect(() => {
		dispatch(axiosRequest('', 'users'))
	})
	return (
		<>
			<Space wrap>
				{
					users.map((value, index) => (
						<Card onClick={() => {
							setActiveUser(value)
							showDrawer()
						}
						} key={index} style={{ cursor: 'pointer' }}>
							<Typography.Text type={'secondary'}>{value.id}</Typography.Text>
							<Typography.Title>{value.username}</Typography.Title>
							<img src={value.img} alt="" />
						</Card>
					))
				}
			</Space>
			{
				!!activeUser &&
				<Drawer
					destroyOnClose
					title={`Edit ${activeUser.username}`}
					width={720}
					onClose={onClose}
					open={open}
					bodyStyle={{ paddingBottom: 80 }}
					extra={
						<Space>
							<Popconfirm
								title={`Delete ${activeUser.username}`}
								description={'Are you sure to delete this user?'}
								onConfirm={() => {
									dispatch(axiosRequest(activeUser, 'Users', 'delete'));
									onClose();
									success(`${activeUser.username} is delete!`)
								}}
								onCancel={onClose}
								okText="Yes"
								cancelText="No">
								<Button danger type={'primary'}>Delete</Button>
							</Popconfirm>
							<Button onClick={onClose}>Cancel</Button>
							<Button onClick={() => form.submit()} type="primary" htmlType={'submit'}>
								Submit
							</Button>
						</Space>
					}
				>
					<Form form={form} initialValues={activeUser} layout="vertical" onFinish={onFinish}>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="username"
									label="userName"
									rules={[{ required: true, message: 'Please enter user name' }]}
								>
									<Input placeholder="Please enter user name" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="img"
									label="img"
									rules={[{ required: true, message: 'Please enter url' }]}
								>
									<Input
										style={{ width: '100%' }}
										placeholder="Please enter url"
									/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="password"
									label="Password"
									rules={[{ required: true, message: 'Please enter password' }]}
								>
									<Input.Password />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="id"
									label="id"
									rules={[{ required: true, message: 'Please enter id' }]}
								>
									<Input />
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Drawer>
			}

		</>
	)
}
export default UserList

