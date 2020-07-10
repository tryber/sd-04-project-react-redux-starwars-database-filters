import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Table = (props) => {
  const { isLoading, data } = props;

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => {
              if (key !== 'url') return <th key={key}>{key}</th>;
              return null;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              {
                name,
                rotation_period: rotationPeriod,
                orbital_period: orbitalPeriod,
                diameter,
                climate,
                gravity,
                terrain,
                surface_water: surfaceWater,
                population,
                residents,
                films,
                created,
                edited,
              },
              index
            ) => (
              <tr key={name}>
                <td key={`${index} ${name}`}>{name}</td>
                <td key={`${index} ${rotationPeriod}`}>{rotationPeriod}</td>
                <td key={`${index} ${orbitalPeriod}`}>{orbitalPeriod}</td>
                <td key={`${index} ${diameter}`}>{diameter}</td>
                <td key={`${index} ${climate}`}>{climate}</td>
                <td key={`${index} ${gravity}`}>{gravity}</td>
                <td key={`${index} ${terrain}`}>{terrain}</td>
                <td key={`${index} ${surfaceWater}`}>{surfaceWater}</td>
                <td key={`${index} ${population}`}>{population}</td>
                <td key={`${index} ${residents}`}>{residents}</td>
                <td key={`${index} ${films}`}>{films}</td>
                <td key={`${index} ${created}`}>{created}</td>
                <td key={`${index} ${edited}`}>{edited}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.planetsReducer.isLoading,
  data: state.planetsReducer.data,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array,
};
