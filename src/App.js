import React from 'react';
import { reducer } from './utils/reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm"
import SignInForm from "./Components/SignInForm"
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ChartDisplay from './Components/ChartDisplay';
import Header from './Components/Header';
import './App.css';

const store = createStore(
  reducer, 
  applyMiddleware (thunk, logger)
)

function App() {
  return (
    <Provider store = {store}>
      <Router>
      <div className="App">

        <Header />
        
        <Route exact path="/chartdisplay" component={ChartDisplay}/> 
        <Route exact path="/signup" component={SignUpForm}/> 
        <Route exact path="/" component={SignInForm}/> 

      </div>
    </Router>
    </Provider>

  );
}

export default App;
