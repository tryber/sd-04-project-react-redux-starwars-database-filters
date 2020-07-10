import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Table from './components/Table';
import GetPlanets from './components/GetPlanets';

function App() {
  return (
    <Provider store={store}>
      <div className="App" />
      <Table />
      <GetPlanets />
    </Provider>
  );
}

export default App;
