import { Switch, Route, Redirect } from 'react-router-dom';
import Privacy from './pages/Privacy';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Rules from './pages/Rules';
import React from 'react';

const ReactApp = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/privacy' component={Privacy} />
				<Route exact path='/rules' component={Rules} />
				<Redirect to='/' />
			</Switch>
			<Footer />
		</>
	);
};

export default ReactApp;