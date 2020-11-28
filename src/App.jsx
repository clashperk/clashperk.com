import { Switch, Route, Redirect } from 'react-router-dom';
import Privacy from './pages/Privacy';
import Footer from './pages/Footer';
import Rules from './pages/Rules';
import Guide from './pages/Guide';
import Home from './pages/Home';
import Faq from './pages/Faq';
import React from 'react';

const ReactApp = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/privacy' component={Privacy} />
				<Route exact path='/rules' component={Rules} />
				<Route exact path='/guide' component={Guide} />
				<Route exact path='/faq' component={Faq} />
				<Redirect to='/' />
			</Switch>
			<Footer />
		</>
	);
};

export default ReactApp;