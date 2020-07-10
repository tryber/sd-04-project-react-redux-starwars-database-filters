import React from 'react';
import Lista from './components/lista';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
        STARS WARS
        <Lista />
      </header>
    </Provider>
  );
}

export default App;
