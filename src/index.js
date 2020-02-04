import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
import { reducer } from './utils/reducers';
import './index.css';

// export const history = createBrowserHistory();

const store = createStore(
    reducer, 
    applyMiddleware(thunk, logger)
  )



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)