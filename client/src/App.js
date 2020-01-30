import React, { Component } from 'react';
// React router
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import layouts
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
// import pages
import Main from './pages/home/Main';
import Kitchen from './pages/recipe/Kitchen';
import Recipe from './pages/recipe/Recipe';
import NoMatch from './pages/home/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import DisplayRecipe from './pages/home/displayrecipe';



class App extends Component{
  render(){
    return(  
      <Router>              
        <NavBar />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/kitchen' component={Kitchen}/>
          <Route path='/recipe' component={Recipe}/>
          {/* <Route path='/recipe/:info' component={DisplayRecipe}/> */}
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/> 
          <Route component={NoMatch}/>
        </Switch>
        <Footer />
        </Router>
    )
  }
}
export default App;
