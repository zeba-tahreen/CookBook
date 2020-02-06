import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import Main from './pages/home/Main';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './pages/private-route/PrivateRoute';
import Dashboard from './pages/dashboard/Dashboard';
import Kitchen from "./pages/dashboard/Kitchen";
import Contact from "./components/layouts/Contact";


// Check for token to keep user logged in
if (localStorage.jwtToken){
  const token = localStorage.jwtToken; // set auth token header
  setAuthToken(token);
  const decoded = jwt_decode(token); // Decode token and get user info and exp
  store.dispatch(setCurrentUser(decoded)); // Set user ans isAuthenticated
  // check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser()); // Logout user
    window.location.href = './login'; // Redirect to login
  }
}



class App extends Component{
  render(){
    return(  
      <Provider store={store}>
        <Router>              
        <NavBar />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/> 
          <Route path='/contact' component={Contact} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/kitchen' component={Kitchen} />
        </Switch>
        <Footer />
        </Router>
      </Provider>
    )
  }
}
export default App;
