import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
  filteredData() {
    const { data, filterByName, filterByNumericValues } = this.props;
    let planets = [...data];
    if (filterByName.length > 0) {
      planets = planets.filter((planet) => planet.name.includes(filterByName));
    }
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        planets = planets.filter((planet) => {
          if (comparison === 'menor que') return Number(planet[column]) < Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          return null;
        });
      });
    }
    return planets;
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
              <tr key={`${planet.name} 1`}>
                {chaves.map((chave) => (
                  <td key={`${planet.name} ${chave}`}>{planet[chave]}</td>
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
  filterByNumericValues: state.filters.filterByNumericValues,
  filterByName: state.filters.filterByName.name,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  filterByName: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
