
import React from 'react';
import { reducer } from './utils/reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import SignUpForm from "./Components/SignUpForm"
import SignInForm from "./Components/SignInForm"

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import ChartDisplay from './components/ChartDisplay';
import Header from './components/Header';

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
        <ChartDisplay />
        <Chart />
        <Route exact path="/signup" component={SignUpForm}/> 
        <Route exact path="/" component={SignInForm}/> 

      </div>
    </Router>
    </Provider>

  );
}

export default App;
