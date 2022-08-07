import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
// import SignupPage from './pages/signup';
import UserPage from './pages/User';
import ContentPage from './pages/Content';
// import SignupPage from './pages/Signup';
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        {/* <Route path='/register' component={SignupPage} exact /> */}
        {/* <Route path='/signup' component={SignupPage} exact /> */}
        <Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
        <Route path='/user' component={UserPage} exact />
        <Route path='/con101' component={ContentPage} exact /> 
        <Route path='/con102' component={ContentPage} exact /> 
        <Route path='/con103' component={ContentPage} exact /> 
        <Route path='/con104' component={ContentPage} exact /> 
        <Route path='/con105' component={ContentPage} exact /> 
        <Route path='/con201' component={ContentPage} exact /> 
        <Route path='/con202' component={ContentPage} exact /> 
        <Route path='/con203' component={ContentPage} exact /> 
        <Route path='/con204' component={ContentPage} exact /> 
        <Route path='/con205' component={ContentPage} exact /> 
        <Route path='/con301' component={ContentPage} exact /> 
        <Route path='/con302' component={ContentPage} exact /> 
        <Route path='/con304' component={ContentPage} exact /> 
        <Route path='/con305' component={ContentPage} exact /> 
        <Route path='/con401' component={ContentPage} exact /> 
        <Route path='/con402' component={ContentPage} exact /> 
        <Route path='/con403' component={ContentPage} exact /> 
        <Route path='/con404' component={ContentPage} exact /> 
        <Route path='/con405' component={ContentPage} exact /> 
        <Route path='/con501' component={ContentPage} exact /> 
        <Route path='/con502' component={ContentPage} exact /> 
        <Route path='/con503' component={ContentPage} exact /> 
        <Route path='/con504' component={ContentPage} exact /> 
      </Switch>
    </Router>
  );
}

export default App;

