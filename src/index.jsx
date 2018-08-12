import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import io from 'socket.io-client';
import logger from 'redux-logger';
import reducer from './reducer';
import {setState} from './actions';
import remoteActionMiddleware from './action-middleware';
import App from './App';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => {
    console.log('from socket state:', state);
    return store.dispatch(setState(state))
  }
);

const store = createStore(reducer, applyMiddleware(remoteActionMiddleware(socket), logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);