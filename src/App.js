import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
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
