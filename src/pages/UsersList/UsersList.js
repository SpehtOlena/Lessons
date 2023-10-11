import { Space, Typography, Card, Drawer, Button, Form, Row, Col, Input, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { axiosRequest } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/es/form/Form";

const UsersList = ({ success }) => {
	const [open, setOpen] = useState(false);
	const [activeUser, setActiveUser] = useState(null);
	const [form] = useForm();
	const dispatch = useDispatch();
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	const onFinish = (values) => {
		dispatch(axiosRequest({ ...values, id: activeUser.id }, 'users', 'put'))
		success(`${activeUser.username} is edit and has name ${values.id}`)
		onClose();
	}
	const users = useSelector(state => state.users.data);
	useEffect(() => {
		form.setFieldsValue(activeUser)
	}, [activeUser])
	useEffect(() => {
		dispatch(axiosRequest('', 'users', ''))
	}, []);

	return (
		<>
			<Space wrap>
				{
					users.map(value => (
						<Card onClick={() => {
							setActiveUser(value)
							showDrawer()
						}} key={value.id} style={{ cursor: 'pointer' }}>
							<Typography.Text code>{value.id}</Typography.Text>
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
					styles={{
						body: {
							paddingBottom: 80,
						},
					}}
					extra={
						<Space>
							<Popconfirm
								title={`Delete ${activeUser.username}`}
								description="Are you sure to delete this user?"
								onConfirm={() => {
									dispatch(axiosRequest(activeUser, 'users', 'delete'))
										.then(() => {
											onClose()
										})
									success(`${activeUser.username} is delete`)
								}}
								onCancel={onClose}
								okText="Yes"
								cancelText="No"
							>
								<Button danger type={'primary'}>Delete</Button>
							</Popconfirm>
							<Button onClick={onClose}>Cancel</Button>
							<Button onClick={() => form.submit()} htmlType={'submit'} type="primary">
								Submit
							</Button>
						</Space>
					}
				>
					<Form form={form} initialValues={activeUser} layout="vertical" hideRequiredMark onFinish={onFinish}>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="username"
									label="username"
									rules={[
										{
											required: true,
											message: 'Please enter username',
										},
									]}
								>
									<Input placeholder="Please enter username" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="password"
									label="password"
									rules={[
										{
											required: true,
											message: 'Please enter password',
										},
									]}
								>
									<Input.Password
										style={{
											width: '100%',
										}}
										placeholder="Please enter password"
									/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={24}>
								<Form.Item
									name="img"
									label="img"
									rules={[
										{
											required: true,
											message: 'Please enter img',
										},
									]}
								>
									<Input
										style={{
											width: '100%',
										}}
										placeholder="Please enter url"
									/>
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Drawer>
			}

		</>
	)
}
export default UsersList