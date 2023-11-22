import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/indexrout'
import configTheme from './style/configTheme';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { rrfProps, store } from './redux/store';
import './style/reset.css';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<ConfigProvider theme={configTheme}>
				<RouterProvider router={routes} />
			</ConfigProvider>
		</ReactReduxFirebaseProvider>
	</Provider>


);