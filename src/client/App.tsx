import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Home  from './views/Home';
import Location from './views/Location'



const App = () => {
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
