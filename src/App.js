import React from "react";
import { reducer } from "./utils/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';

import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/SignInForm";



import thunk from "redux-thunk";
import logger from "redux-logger";

import MainPage from "./Components/MainPage";
import Header from "./Components/Header";

import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          
          <PrivateRoute exact path="/main-page" component={MainPage} />
          <Route exact path="/sign-in" component={SignInForm} />
          <Route exact path="/" component={SignUpForm} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
