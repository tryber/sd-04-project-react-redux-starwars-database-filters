import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';

const filterPlanetByName = (planets, name = '') => planets.filter((planet) => planet.name.includes(name));

const Table = ({ data, isFetching, name }) => {
  console.log('Data da API: ', data);
  console.log('Fetch: ', isFetching);
  let filteredPlanets = data;
  filteredPlanets = filterPlanetByName(data, name);
  console.log('filtered planets', filteredPlanets);
  if (isFetching) return <p>Loading...</p>;
  return (
    <table className="table table-bordered table-dark">
      <TableHeader heads={Object.keys(data[0])} />
      <tbody>
        {filteredPlanets.map((planet) => (
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
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
  name: state.filters.filterByName.name,
});

export default connect(mapStateToProps, null)(Table);
