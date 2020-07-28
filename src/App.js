import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

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
