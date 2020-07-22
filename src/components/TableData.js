import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableData extends Component {
  tableHeader = data => {
    if (data) {
      return Object.keys(data).map((attr, i) => <th key={i}>{attr}</th>);
    }
    return <p>Nothing found</p>;
  };

  renderTable = data => data.map((planet, i) => (
    <tr key={i}>
      {Object.values(planet).map((attr, y) => (
        <td key={y}>{attr}</td>
      ))}
    </tr>
  ));

  render() {
    const { results } = this.props;
    return (
      <table>
        <thead>
          <tr>{this.tableHeader(results[0])}</tr>
        </thead>
        <tbody>{this.renderTable(results)}</tbody>
      </table>
    );
  }
}

TableData.propTypes = {
  results: PropTypes.shape,
};

TableData.defaultProps = {
  results: null,
};
