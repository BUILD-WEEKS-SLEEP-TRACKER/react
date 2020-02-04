import { reducer } from '../reducers'
import { createStore, applyMiddlware } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import SignUpForm from "./Components/SignUpForm"
import SignInForm from "./Components/SignInForm"
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Chart from './components/Chart';

import './App.css';

const store = createStore(
  reducer, 
  // applyMiddleware (thunk, logger)
)

function App() {
  return (
    <Provider store = {store}>
      <Router>
      <div className="App">
        <Chart />
        <Route exact path="/signup" component={SignUpForm}/> 
        <Route exact path="/" component={SignInForm}/> 
      </div>
    </Router>
    </Provider>

  );
}

export default App;
