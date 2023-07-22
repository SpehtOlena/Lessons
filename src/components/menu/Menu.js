export const Menu = ({ menuItems, type }) => {
	return (
		<div>
			<a href={menuItems[0]}>{menuItems[0]}</a>
			<br />
			<a href={menuItems[1]}>{menuItems[1]}</a>
			<br />
			<a href={menuItems[2]}>{menuItems[2]}</a>
		</div>
	)
}
