import React, { Component } from 'react';

// let filtersColumn = [
//   'population',
//   'orbital_period',
//   'diameter',
//   'rotation_period',
//   'surface_water',
// ];

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      filtersColumn: [
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ],
      // comparison: '',
      // value: '',
    };
  }

  componentDidMount() {
    this.configState();
  }

  configState() {
    const { column, filtersColumn } = this.state;
    this.setState({ filtersColumn: filtersColumn.filter((filt) => filt !== column) });
  }

  handleInputValue({ target: { value, name } }) {
    this.setState({ [name]: String(value) });
  }

  render() {
    const { column, filtersColumn } = this.state;
    return (
      <div>
        <select
          value={column}
          name="column"
          data-testid="column-filter"
          onChange={(e) => {
            this.handleInputValue(e);
          }}
        >
          <option value="">Coluna</option>
          {filtersColumn.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Column;
