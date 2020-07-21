import React from 'react';
import { Provider } from 'react-redux';
import data from './store';
import Table from './components/table';

function App() {
  return (
    <div className="App">
      <Provider store={data}>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
