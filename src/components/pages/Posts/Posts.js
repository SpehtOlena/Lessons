import { Empty, Space } from "antd";
import PostCard from "../../PostCard/PostCard";

const Posts = ({ posts, setPosts, activeUser }) => {
	return (
		<Space wrap style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'stretch' }}>
			{
				!!posts.length ? posts.map((value, index) => (
					<PostCard activeUser={activeUser} posts={posts} setPosts={setPosts} key={index} post={value} />
				)) :
					<Empty />
			}
		</Space>
	)
}
export default Posts