import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/indexrout'
import configTheme from './style/configTheme';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ConfigProvider
			theme={configTheme}
		>
			<React.StrictMode>
				<RouterProvider router={routes} />
			</React.StrictMode>
		</ConfigProvider>
	</Provider>


);