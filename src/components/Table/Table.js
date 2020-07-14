import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Tabelas from './Tabelas';

function Table({ isLoading, data }) {
  if (isLoading) return <span>L O A D I N G . . .</span>;
  // const offResidents = Object.keys(data[0]).filter((e) => e !== 'residents');
  // const filterByName = data.filter((e) => e.name.toLowerCase().includes(searchBar));
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((e, i) => (
              <td key={`${i + 1}`}>{e}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((planet, i) => (
            <Tabelas planet={planet} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.defaultProps = {
  data: [],
};

Table.propTypes = {
  data: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }),
  isLoading: PropTypes.bool.isRequired,
  searchBar: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.reducerFetch.isLoading,
  data: state.reducerFetch.data.results,
  searchBar: state.reducerInput.filters.filterByName.name,
});

export default connect(mapStateToProps)(Table);
