import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      head: [
        'name',
        'climate',
        'diameter',
        'edited',
        'films',
        'gravity',
        'orbital_period',
        'population',
        'rotation_period',
        'surface_water',
        'terrain',
        'url',
      ],
    };
  }

  tableHeadRender() {
    const { head } = this.state;
    return (
      <thead>
        <tr>
          {head.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>
    );
  }


  render() {
    return (
      <div />
    );
  }
}

export default Table;
