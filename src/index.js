import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';

//import './App.css';
import './assets/scss/style.scss';
import { AuthProvider } from './utils/Auth';

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<AuthProvider>
			<App />
		</AuthProvider>
	</Router>,
	document.getElementById('root')
);
