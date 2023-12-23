import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog/Blog";
import Sale from "../pages/Sale/Sale";
import ContactUs from "../pages/ContactUs/ContactUs";
import ProductPage from "../pages/ProductPage/ProductPage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart"

export default createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'shop',
				element: <Shop />
			},
			{
				path: 'shop/:productId',
				element: <ProductPage />
			},
			{
				path: 'blog',
				element: <Blog />
			},
			{
				path: 'sale',
				element: <Sale />
			},
			{
				path: 'contact_us',
				element: <ContactUs />
			},
			{
				path: 'shopping_cart',
				element: <ShoppingCart />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]
)