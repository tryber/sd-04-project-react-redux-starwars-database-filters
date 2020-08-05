import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './store';
=======
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
>>>>>>> e14567c83b028f9242607acca7d007b7229c9e1f
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

<<<<<<< HEAD
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
=======
const middlewares = [thunk];

ReactDOM.render(
  <Provider
    store={createStore(
      reducer,
      composeWithDevTools(applyMiddleware(...middlewares)),
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);
>>>>>>> e14567c83b028f9242607acca7d007b7229c9e1f

serviceWorker.unregister();
