import { Menu } from "@mui/material"
import { MenuItem } from "@mui/material"



const CustomMenu = ({ menuItems, setActivePage }) => {
	return (
		<div
			id="basic-menu"
			style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}
		>
			{
				menuItems.map((value, index) => (
					<div style={{ cursor: 'pointer' }} key={index} onClick={() => setActivePage(value.component)}>{value.label}</div>
				))
			}
		</div>
	)
}
export default CustomMenu