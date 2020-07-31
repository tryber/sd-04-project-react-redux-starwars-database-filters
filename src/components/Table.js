import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import filterAll from './filterAll';
import linhas from './Linhas';
import './Table.css';

const Table = (props) => {
  const { data, isFetching, name, numericValues } = props;
  // const filterName = data.filter((planet) => planet.name.includes(name));
  const filterData = filterAll(data, name, numericValues);

  if (isFetching) return <span>...Loading</span>;
  const planeta1 = data;
  const colunas = Object.keys(planeta1[0]).filter((campo) => campo !== 'residents');
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
        <tbody>{filterData.map((chosenPlanet) => linhas(chosenPlanet))}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.getPlanets.data,
  name: state.filters.filterByName.name,
  isFetching: state.getPlanets.isFetching,
  numericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);
