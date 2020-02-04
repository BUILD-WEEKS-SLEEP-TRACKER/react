import React from 'react';
import { reducer } from './utils/reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
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
      <div className="App">
        <Header />
        <ChartDisplay />
      </div>
    </Provider>
  );
}

export default App;
