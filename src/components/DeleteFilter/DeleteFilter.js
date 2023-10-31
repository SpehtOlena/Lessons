import { Space } from 'antd';
import { CloseOutlined } from "@ant-design/icons";
import './DeleteFilter.css'

const DeleteFilter = ({ children, onClick }) => {
	return (
		<Space onClick={onClick} className={'delete-filter'}>
			<CloseOutlined />
			{children}
		</Space>
	)
}
export default DeleteFilter