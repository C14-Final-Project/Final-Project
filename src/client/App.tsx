import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Home from './views/Home';
import Location from './views/Location';
import UserAccount from './views/UserAccount';
import EditUserAccount from './views/Edit';
import LocationDay from './views/LocationDay';
import SinglePost from './views/SinglePost';
import MakePost from './views/MakePost';
import Register from './views/Register';
import Login  from './views/Login'
import { nameProps } from './utils/types';
import { useHistory } from 'react-router-dom'
import { userContext } from "./utils/userContext";
import { createContext } from "react";
import { useState, useEffect } from 'react';




const App = () => {
	
	const [defaultObjState, setDefaultObjState] = useState({
		invisible: 'invisible',
		invisible2: '',
		auth: false,
		username: '',
		profileType: '',
		loginText: 'Login',
		registerText: 'Register',
	})
	
	const [next, setNext] = useState(false)
	const [propsObj, setPropsObj] = useState(defaultObjState)
	const [username, setUsername] = useState(propsObj.username)
	const [profileType, setProfileType] = useState<string>(propsObj.profileType)
	const [auth, setAuth] = useState(propsObj.auth)
	const [authObjState, setAuthObjState] = useState({
	  username: username,
	  profileType: 'artist',
	  auth: true,
	  invisible: '',
	  invisible2: 'invisible',
	  logout: 'Log Out',
	  loginText: '',
	  registerText: '',
	})
  	
	const getSession = async () => {
	  try {
		const res = await fetch('/api/session/0');
		const sessionName = await res.json();
		if (sessionName.auth == true) {
			setUsername(sessionName.username)
			setProfileType(sessionName.profileType)
			setAuth(sessionName.auth)
		}
		console.log(sessionName)
	  } catch (error) {
		console.log(error);
	  }
	}
  
	useEffect(() => {
	  if (auth == true) {
		setNext(true)
		setAuthObjState({
			username: username,
			profileType: profileType,
			auth: true,
			invisible: '',
			invisible2: 'invisible',
			logout: 'Log Out',
			loginText: '',
			registerText: '',
		})
	  }
	}, [auth])
  
	useEffect(() => {
		if (next == true) {
			setPropsObj(authObjState)
		}
	}, [next])
  
	useEffect(() => {
	  getSession()
	}, [])

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

					<Route exact path="/users/:username">
						<UserAccount />
					</Route>

<<<<<<< HEAD
					<Route exact path="/users/:username/edit">
						<EditUserAccount />
=======

					<Route path="/users/:username/edit">
						<UserAccount />

>>>>>>> 068095d9f1c95b42d65be6c15e18b571ce9ce02d
					</Route>

					<Route exact path="/:locationEventName/:sidebarSelection/post">
						<MakePost />
					</Route>

					<Route path="/:locationEventName/:sidebarSelection/view">
						<LocationDay />
					</Route>

					<Route path="/:locationEventName/:postid">
						<SinglePost />
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