import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import { Provider } from 'react-redux'
import { todoApp } from './reducers.js';

const logger = createLogger();
const store = createStore(todoApp , applyMiddleware(logger));
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();