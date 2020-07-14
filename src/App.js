import React from 'react';
import './App.css';
import hearderImage from './images/star-wars.png';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header>
        <img src={hearderImage} alt="star-wars" width="100%" height="400px" />
        <table className="table">
          <tr className="table-column">
            <td className="table-cell">Climate</td>
            <td className="table-cell">Diameter</td>
            <td className="table-cell">Gravity</td>
            <td className="table-cell">Name</td>
            <td className="table-cell">Orbital period</td>
            <td className="table-cell">Population</td>
            <td className="table-cell">Residents</td>
            <td className="table-cell">Rotarion period</td>
            <td className="table-cell">Surface water</td>
            <td className="table-cell">Terrain</td>
            <td className="table-cell-url">Url</td>
          </tr>
        </table>
      </header>
      <content>
        <Table />
      </content>
    </div>
  );
}

export default App;
