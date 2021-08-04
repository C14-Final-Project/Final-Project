import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Navbar1 from './components/Navbar';
import Footer from './components/Footer';
import Home  from './views/Home';

=======
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import { nameProps } from './utils/types'
import Home from './views/Home'
import Location from './views/Location'

export interface AppProps {}
/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
>>>>>>> 27d46916b7e5b93a09379c7f541ef046423109bb



const App = () => {
	return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 27d46916b7e5b93a09379c7f541ef046423109bb
