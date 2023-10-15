import { Link, createBrowserRouter } from "react-router-dom";
import { Result, Button } from "antd";
import App from "../App";
import Home from "../pages/Home/Home";
import Support from "../pages/Support/Support";
import Users from "../pages/Users/Users";
import UserPage from "../pages/UserPage/UserPage";

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [{
			path: 'home',
			element: <Home />
		},
		{
			path: 'users',
			element: <Users />
		},
		{
			path: 'users/:userId',
			element: <UserPage />
		},
		{
			path: 'support',
			element: <Support />
		}]
	},
	{
		path: '*',
		element: <Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Link to={'/home'}>
					<Button type="primary">Back Home</Button>
				</Link>}
		/>
	}
])