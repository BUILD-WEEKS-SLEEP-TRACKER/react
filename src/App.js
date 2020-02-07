import React from "react";
import { reducer } from "./utils/reducers";
import { createStore, applyMiddleware } from "redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import MainPage from "./components/MainPage";
import Header from "./components/Header";

import AddSleepEntry from "./components/AddSleepEntry";
import EditSleepEntry from "./components/EditSleepEntry"
import {AppStyles} from "./AppStyles";
import "./App.css";

function App() {

  return (
    <Router>
      <AppStyles>
        <Header />
        <PrivateRoute exact path="/main-page" component={MainPage} />
        <PrivateRoute  path="/add-sleep-entry" component={AddSleepEntry} />
        
        <PrivateRoute  path="/edit-sleep-entry/:id">
          <EditSleepEntry />
        </PrivateRoute>

        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/" component={SignUpForm} />
        
      </AppStyles>
    </Router>
     
  );
} 




export default App;
