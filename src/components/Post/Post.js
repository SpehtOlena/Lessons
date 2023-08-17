import { useContext } from "react"
import { ThemeContext } from "../TestApi"


const Post = ({ data }) => {
	const theme = useContext(ThemeContext)

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			width: 150,
			fontSize: 12,
			border: "1px solid black",
			backgroundColor: theme === 'light' ? "#fff" : "#000",
			color: theme === "light" ? "#000" : "#fff"
		}}>
			<button>{data.id}</button>
			<h4>{data.title}</h4>
			<p>{data.body}</p>


		</div>
	)
}
export default Post