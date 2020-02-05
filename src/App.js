import React from "react";
import { reducer } from "./utils/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";





import MainPage from "./components/MainPage";
import Header from "./components/Header";

import "./App.css";



function App() {
  return (
    <Router>
      
        <div className="App">
          <Header />
          
          <PrivateRoute exact path="/main-page" component={MainPage} />
          <Route exact path="/sign-in" component={SignInForm} />
          <Route exact path="/" component={SignUpForm} />
        </div>
      
  </Router>
  );
}

export default App;
