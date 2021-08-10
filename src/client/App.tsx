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
		auth: false
	})
	
	const [next, setNext] = useState(false)
	const [propsObj, setPropsObj] = useState(defaultObjState)
	const [username, setUsername] = useState(propsObj.username)
	const [profileType, setProfileType] = useState<string>(propsObj.profileType)
	const [auth, setAuth] = useState(propsObj.auth)
	const [session, setSession] = useState(false)
	const [authObjState, setAuthObjState] = useState({
	  username: username,
	  profileType: 'artist',
	  auth: true,
	  loggedin: true,
	  invisible: '',
	  invisible2: 'invisible'
	})
  	
	const getSession = async () => {
	  try {
		const res = await fetch('/api/session/0');
		const sessionName = await res.json();
		setSession(true)
		
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
			loggedin: true,
			invisible: '',
			invisible2: 'invisible'
		})
		console.log('fuck')
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
        <userContext.Provider value={{ propsObj, setPropsObj }}>
          <Navbar1 />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/Login">
              <Login/>
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