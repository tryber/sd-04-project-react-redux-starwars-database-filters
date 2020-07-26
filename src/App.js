import React from 'react';
import { Provider } from 'react-redux';
import data from './store';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Provider store={data}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
