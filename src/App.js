import React from 'react';
import { reducer } from '../reducers'
import { createStore, applyMiddlware } from 'redux';
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import Chart from './components/Chart';

import './App.css';

const store = createStore(
  reducer, 
  // applyMiddleware (thunk, logger)
)

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Chart />
      </div>
    </Provider>
  );
}

export default App;
