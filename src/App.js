import React from 'react';

import Home from './components/Home';
import Filter from './components/filters/Filters';

function App() {
  return (
    <div className="App">
      <Filter />
      <Home />      
    </div>
  );
}

export default App;
