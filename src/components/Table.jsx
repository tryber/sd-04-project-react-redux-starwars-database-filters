import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css';
import linhas from './Linhas';

class Table extends Component {
  render() {
    const { data, isFetching, name } = this.props;
    const filterName = data.filter((planet) => planet.name.includes(name));

    if (isFetching) return <span>...Loading</span>;
    const planeta1 = data;
    const colunas = Object.keys(planeta1[0]).filter((campo) => campo !== 'residents');
    console.log(name);
    return (
      <div>
        <table className="tabela">
          <thead>
            <tr>
              {colunas.map((coluna) => (
                <th key={coluna}>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>{filterName.map((chosenPlanet) => linhas(chosenPlanet))}</tbody>

        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  name: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.getPlanets.data,
  name: state.filters.filterByName.name,
  isFetching: state.getPlanets.isFetching,
});

export default connect(mapStateToProps)(Table);
