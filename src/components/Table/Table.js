import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Tabelas from './Tabelas';

function Table({ isLoading, data, searchBar }) {
  if (isLoading) return <span>L O A D I N G . . .</span>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((e, i) => (
              <th key={`${i + 1}`}>{e}</th>
            ))}
          </tr>
        </thead>
        {data.map((planet, i) => (
          <tbody key={`${i + 1}`}>
            <Tabelas planet={planet} />
          </tbody>
        ))}
      </table>
      <h1>{searchBar}</h1>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchBar: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.reducerFetch.isLoading,
  data: state.reducerFetch.data.results,
  searchBar: state.reducerInput.filters.filterByName.name,
});

export default connect(mapStateToProps)(Table);
