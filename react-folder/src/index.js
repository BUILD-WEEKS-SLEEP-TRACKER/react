import React from 'react';
import reactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';

import { reducer } from './utils/reducers';
import './index.css';

import {BrowserRouter as Router} from "react-router-dom"


// export const history = createBrowserHistory();


const rootElement = document.getElementById('root');


reactDOM.render(
    <Provider>
        <App />
    </Provider>,
    rootElement
)





