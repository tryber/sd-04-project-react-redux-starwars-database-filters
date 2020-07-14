import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';

const Table = ({ data, loading, filterName }) => {
  const keys =
    data.length !== 0
      ? Object.keys(data[0]).filter((key) => key !== 'residents')
      : [];
  let dataFiltered = data;
  if (filterName !== '') {
    dataFiltered = data.filter((planet) => planet.name.includes(filterName.toLowerCase()));
  }
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((planet) => (
            <tr key={planet.diameter}>
              {keys.map((key) => (
                <td key={key}>{planet[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  filterName: state.filters.filterByName.name,
  // filterComparison: state.filters.filterByNumericValues,
});

Table.propTypes = {
  data: PropTypes.shape([]).isRequired,
  loading: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
