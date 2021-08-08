import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Home from './views/Home';
import Location from './views/Location';
import UserAccount from './views/UserAccount';
import LocationDay from './views/LocationDay';
import SinglePost from './views/SinglePost';

import MakePost from './views/MakePost';
import Register from './views/Register';
import { nameProps } from './utils/types';
import { useHistory } from 'react-router-dom'
import { userContext } from "./utils/userContext";

import { createContext } from "react";
import { useState, useEffect } from 'react';



const App = () => {
	
	const [defaultObjState, setDefaultObjState] = useState({
		invisible: 'invisible',
		invisible2: ''
	  })
	const [propsObj, setPropsObj] = useState(defaultObjState)

	return (
		<div>
			<Router>
			<userContext.Provider value={{propsObj, setPropsObj}}>
				<Navbar1 />
				
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/register">
						<Register />
					</Route>

					<Route path="/users/:username">
						<UserAccount />
					</Route>

					<Route exact path="/:locationEventName/:sidebarSelection/post">
						<MakePost />
					</Route>

					<Route path="/:locationEventName/:sidebarSelection/:postid">
						<SinglePost />
					</Route>

					<Route path="/:locationEventName/:sidebarSelection">
						<LocationDay />
					</Route>

					<Route path="/:locationEventName">
						<Location />
					</Route>




				</Switch>

				<Footer />
				</userContext.Provider>
			</Router>
		</div>
	);
};

export default App;