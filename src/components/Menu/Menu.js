import './Menu.css'

const Menu = ({ items, setActivePage }) => {
	return (
		<div>
			<div className={"Menu-items"}>
				{
					items.map(value => {
						return <a onClick={() => {
							setActivePage(value.element)
						}} key={value.label}>
							{value.label}
						</a>
					})
				}
			</div>

		</div >
	)
}
export default Menu