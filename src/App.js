import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import SleepList from "./components/SleepList";
import PrivateRoute from './components/PrivateRoute';
import Chart from './components/Chart';
import Login from './components/Login';
import SignUp from './components/SignUp';

import './App.css';



function App() {
  return (
      <div className="App">
          <Route exact path='/' component={Login} />
          <Route path='/SignUp' component={SignUp} />
          <PrivateRoute exact path='/home' component={SleepList} />
          
          <PrivateRoute exact path='/home' component={Chart} />
        <SleepList />
      </div>
   

  );
}

export default App;
