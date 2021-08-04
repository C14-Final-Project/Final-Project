import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar';
import Footer from './components/Footer';
import Home  from './views/Home';




const App = () => {
	return (
	<>
	<Router>
		<Navbar1/>
		<Home/>
	
		<Switch>
		<Route path='/' exact />
		<Route path='/' exact />
		<Route path='/' exact />
		</Switch>
			<Footer/>
	</Router>
	
	</>
	)
};



export default App;
