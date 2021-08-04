import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import { nameProps } from './utils/types'
import Home from './views/Home'
import Location from './views/Location'

export interface AppProps {}
/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {


	return (
		<div>
			<Router>
				<Navbar1 />
				<Switch>
					<Route exact path="/" >
						<Home />
					</Route>

					<Route path="/:location" >
						<Location />
					</Route>
					
					
				</Switch>
				
				<Footer />
			</Router>
		</div>
	);
};

export default App;