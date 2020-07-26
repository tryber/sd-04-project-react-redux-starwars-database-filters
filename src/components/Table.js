import React, { Component } from 'react';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Film</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <TableBody />
        </table>
      </div>
    );
  }
}

export default Table;
