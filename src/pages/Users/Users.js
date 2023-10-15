import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { axiosRequest } from "../../redux/actions"
import { Button, Empty, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const users = useSelector(state => state.users.data);
	useEffect(() => {
		dispatch(axiosRequest('', 'users', ''))
	}, []);
	const columns = [
		{
			title: 'id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'username',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: 'password',
			dataIndex: 'password',
			key: 'password',
		}

	];
	return (
		<>
			<Table
				rowKey={row => row.id}
				onRow={(record, rowIndex) => {
					return {
						onClick: event => {
							navigate(`${record.id}`)
						}
					}
				}}
				dataSource={users}
				columns={columns}
				locale={{
					emptyText: (
						<Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
							<Link to={'/home'}>
								<Button type={'primary'}>Go to home!</Button>
							</Link>
						</Empty>
					)
				}}
			/>
		</>
	)
}
export default Users