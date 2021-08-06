import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Home from './views/Home';
import Location from './views/Location';
import UserAccount from './views/UserAccount';
import LocationDay from './views/LocationDay';
import SinglePost from './views/SinglePost';
import MakePost from './views/MakePost'
import Register from './views/Register'





const App = () => {
	return (
<<<<<<< HEAD
    <div>
      <Router>
        <Navbar1 />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route path="/users/:username">
            <UserAccount />
          </Route>

          <Route path="/:location/:sidebarSelection/:postid">
            <SinglePost />
          </Route>

          <Route path="/:location/:sidebarSelection">
            <LocationDay />
          </Route>

          <Route path="/:location/post">
            <MakePost />
          </Route>

          <Route path="/:location">
            <Location />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
=======
		<div>
			<Router>
				<Navbar1 />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/users/:username">
						<UserAccount />
					</Route>

					<Route exact path="/:location/:sidebarSelection/post">
						<MakePost />
					</Route>

					<Route path="/:location/:sidebarSelection/:postid">
						<SinglePost/>
					</Route>

					<Route path="/:location/:sidebarSelection">
						<LocationDay />
					</Route>

					

					<Route path="/:location">
						<Location />
					</Route>




				</Switch>

				<Footer />
			</Router>
		</div>
	);
>>>>>>> 5f6513a0946a594f7b499f3f7a115f8dc87e0200
};

export default App;
