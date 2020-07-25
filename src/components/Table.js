import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';

const comparation = (planet, { column, comparison, value }) => {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return false;
  }
};

const filterPlanetByName = (planets, teste = '') => planets.filter((planet) => planet.name.includes(teste));

const Table = ({
  data, isFetching, name, filterByNumericValues,
}) => {
  let planets = [...data];

  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filter) => {
      planets = planets.filter((planet) => comparation(planet, filter));
    });
  }

  if (name !== '') planets = filterPlanetByName(planets, name);

  if (isFetching) return <p>Loading...</p>;

  return (
    <table className="table table-bordered table-dark">
      <TableHeader heads={Object.keys(data[0])} />
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
  name: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, null)(Table);
