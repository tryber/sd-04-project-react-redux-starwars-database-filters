import React from 'react';

import apiPlanets from './services/index';

function App() {
  console.log(apiPlanets)
  return (
    <div className="App">
      <p>
        {apiPlanets}
      </p>      
    </div>
  );
}

export default App;
