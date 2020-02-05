import React from 'react';
import { reducer } from '../reducers'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import SignUpForm from "./components/SignUpForm"
import SignInForm from "./components/SignInForm"
import thunk from 'redux-thunk';
import logger from 'redux-logger';


//components
import SleepList from "./components/SleepList";
import PrivateRoute from './components/PrivateRoute';
import Chart from './components/Chart';
import Login from './components/Login';
import SignUp from './components/SignUp';

import './App.css';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
)

function App() {
  return (

    <Provider store = {store}>
      <Router>
      <div className="App">
        <Chart />
        <Route exact path="/signup" component={SignUpForm}/> 
        <Route exact path="/" component={SignInForm}/> 
        <PrivateRoute exact path='/sleeptracker' component={Chart} />
        <PrivateRoute exact path='/sleeptracker' component={SleepList} />
      </div>
      </Router>
  
    </Provider>


  );
}

export default App;
