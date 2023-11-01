import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/indexrout'
import configTheme from './style/configTheme';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './redux/store';
import './style/reset.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ConfigProvider
			theme={configTheme}
		>

			<RouterProvider router={routes} />

		</ConfigProvider>
	</Provider>


);