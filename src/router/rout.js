import { Link, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";
import { Result, Button } from "antd";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'users',
				element: <Users />
			}
		]
	},
	{
		path: '*',
		element: <Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={<Link to={'home'}><Button type="primary">Back Home</Button></Link>}
		/>
	}
])