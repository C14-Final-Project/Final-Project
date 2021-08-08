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



const App = (props: nameProps) => {

	const history = useHistory()

	const [username, setUsername] = useState(props.username)

	const propsTest: nameProps = {
		username: username,
		email: 'test',
		profileType: 'test',
		auth: true
	};

	return (
		<div>
			<Router>
			<userContext.Provider value={{username, setUsername}}>
				<Navbar1 username={props.username} email={props.email} profileType={props.profileType} auth={props.auth} />
				
				<Switch>
					<Route exact path="/">
						<Home username={props.username} email={props.email} profileType={props.profileType} auth={props.auth} />
					</Route>

					<Route path="/register">
						<Register username={props.username} email={props.email} profileType={props.profileType} auth={props.auth} />
					</Route>

					<Route path="/users/:username">
						<UserAccount username={props.username} email={props.email} profileType={props.profileType} auth={props.auth} />
					</Route>

					<Route exact path="/:location/:sidebarSelection/post">
						<MakePost username={props.username} email={props.email} profileType={props.profileType} auth={props.auth} />
					</Route>

					<Route path="/:location/:sidebarSelection/:postid">
						<SinglePost username={props.username} email={props.email} profileType={props.profileType} auth={props.auth} />
					</Route>

					<Route path="/:location/:sidebarSelection">
						<LocationDay username={props.username} email={props.email} profileType={props.profileType} auth={props.auth} />
					</Route>

					<Route path="/:location">
						<Location username={props.username} email={props.email} profileType={props.profileType} auth={props.auth} />
					</Route>




				</Switch>

				<Footer />
				</userContext.Provider>
			</Router>
		</div>
	);
};

export default App;