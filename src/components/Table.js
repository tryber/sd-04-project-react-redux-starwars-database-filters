import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateHeadings from '../components/CreateHeadings';
import CreateBody from '../components/CreateBody';

const Table = ({ isLoading, data }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <table>
        <CreateHeadings dados={Object.keys(data[0])} />
        <CreateBody dados={data} />
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
