import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/reset.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/rout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>

		<RouterProvider router={router} />
	</Provider>

);

