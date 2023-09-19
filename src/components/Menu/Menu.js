const Menu = ({ menuItems, setActivePage }) => {
	return (
		<div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
			{
				menuItems.map((value, index) => (
					<span onClick={() => setActivePage(value.components)} key={index} style={{ margin: '0 5px', cursor: 'pointer' }}>
						{value.label}
					</span>
				))
			}

		</div>
	)
}
export default Menu