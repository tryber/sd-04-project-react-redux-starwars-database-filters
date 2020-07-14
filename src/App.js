import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Table from './components/Table';


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
        STARS WARS
        <Table />
      </header>
    </Provider>
  );
}

export default App;
