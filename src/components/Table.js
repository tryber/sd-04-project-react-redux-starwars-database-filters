import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
  filteredData() {
    const { data, filterByName, filterByNumericValues } = this.props;
    if (filterByName) {
      return data.filter((planet) => planet.name.includes(filterByName));
    }
    if (filterByNumericValues) {
      return data.filter((planet) => {
        const { column, comparison, value } = filterByNumericValues;
        if (comparison === 'less') return planet[column] < value;
        if (comparison === 'equal') return planet[column] === value;
        return planet[column] > value;
      });
    }
    return data;
  }

  render() {
    const { isFetching, data } = this.props;
    const chaves =
      (data.length !== 0) ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
    const planets = this.filteredData();
    if (isFetching) return <h1>Loading...</h1>;
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {chaves.map((chave) => (<th key={chave}>{chave}</th>))}
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr key={`${planet} 1`}>
                {chaves.map((chave) => (
                  <td key={`${chave} 2`}>{planet[chave]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.reducer.isFetching,
  data: state.reducer.data,
  filterByName: state.reducerFilter.filters.filterByName.name,
  filterByNumericValues: state.reducerFilter.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  filterByName: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.objectOf(PropTypes.string).isRequired,
};
