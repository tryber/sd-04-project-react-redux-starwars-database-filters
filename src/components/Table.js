import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from './SeachBar';
import Filters from './Filters';
import TableContent from './TableContent';

const Table = (props) => {
  const { isFetching } = props;
  return isFetching ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div>StarWars Datatable with Filters</div>
      <SearchBar />
      <Filters />
      <TableContent />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.swAPI.isFetching,
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Table);
