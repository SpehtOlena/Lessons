import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosRequest } from "../../redux/actions";
import { Table } from "antd";

const Users = () => {
	const dispatch = useDispatch();
	const users = useSelector(state => state.users.data)
	useEffect(() => {
		dispatch(axiosRequest('', 'users', ''))
	});
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
			<Table onRow={(e) => {
				console.log(e);
			}} dataSource={users} columns={columns} />
		</>
	)
}
export default Users