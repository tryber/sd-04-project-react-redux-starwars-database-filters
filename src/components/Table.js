import React, { Component } from 'react';
import { fetchPlanet } from '../actions/dataAction';

class Table extends Component {
  // componentDidMount() {
  //     fetchPlanet();
  //     console.log(fetchPlanet());
  // }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
            </tr>
            {/* <td>Population</td>
            <td>Climate</td>
            <td>Diameter</td>
            <td>Gravity</td>
            <td>Orbital Period</td>
            <td>Rotation Period</td>
            <td>Surface Water</td>
            <td>Terrain</td>
            <td>URL</td> */}
          </thead>
          <tbody>
            <tr>
              <td>Tatooine</td>
            </tr>
            {/* <td>2000000</td>
            <td>Arid</td>
            <td>10465</td>
            <td>1 standard</td>
            <td>304</td>
            <td>23</td>
            <td>1</td>
            <td>Dessert</td>
            <td>url</td> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
