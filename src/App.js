import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Table from './components/table/Table';
import GetPlanets from './components/GetPlanets';
import { FilterByName } from './components/filters/FilterByName';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FilterByName />
        <Table />
        <GetPlanets />
      </div>
    </Provider>
  );
}

export default App;
