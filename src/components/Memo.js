import { useState } from "react"
import Post from "./Post/Post"
import React from "react"


const MemoizedComponent = React.memo(Post)


const Memo = () => {
	const [data, setData] = useState([]);

	function onClick() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(data => setData(data))
	}
	return (
		<div>
			<button onClick={onClick}>Download</button>
			<div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between" }}>
				{
					!!data.length &&
					data.map((value, index) => <MemoizedComponent data={value} key={index} />)
				}

			</div>
		</div >
	)
}
export default Memo