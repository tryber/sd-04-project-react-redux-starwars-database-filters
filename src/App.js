import React from 'react';
import store from './store';
import './App.css';
import { Provider } from 'react-redux';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Home />
        </Provider>
      </header>
    </div>
  );
}

export default App;
