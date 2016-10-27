var React = require('react');
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from '../store.js';
import App from './components/App.js';


// Renders routes everthrough there will be only one view for now.
const router = (	
		<Provider store={store}>
			<Router history={browserHistory}>
				<Router path="/" component={App}></Router>
			</Router>
		</Provider>
	);

render(router, document.getElementById('app'));

