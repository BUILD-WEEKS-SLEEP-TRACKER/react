import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import SignUpForm from "./Components/SignUpForm"
import SignInForm from "./Components/SignInForm"
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/signup" component={SignUpForm}/> 
      <Route exact path="/" component={SignInForm}/> 
   
      
     
      

   
    </div>
    </Router>
  );
}

export default App;
