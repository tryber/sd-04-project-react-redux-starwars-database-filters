import React from 'react';
import { connect } from 'react-redux';
import { changeHandler } from '../actions';

const SearchBar = (props) => {
  const { search, searchText } = props;
  return (
    <input
      data-testid="name-filter"
      value={searchText}
      type="text"
      onChange={(event) => search(event.target.value)}
    />
  );
};

const mapStateToProps = (state) => ({
  searchText: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  search: (searchText) => dispatch(changeHandler(searchText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
