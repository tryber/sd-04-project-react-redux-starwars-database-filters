import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import starReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];

ReactDOM.render(
  <Provider
    store={createStore(
      starReducer,
      composeWithDevTools(applyMiddleware(...middlewares)),
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
