import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeHandler } from '../actions';

const SearchBar = (props) => {
  const { searchText = '' } = props;
  return (
    <input
      data-testid="name-filter"
      value={searchText}
      type="text"
      onChange={(event) => props.changeHandler(event.target.value)}
    />
  );
};

const mapStateToProps = (state) => ({
  searchText: state.filters.filterByName.name,
});

// const mapDispatchToProps = (dispatch) => ({
//   search: (searchText) => dispatch(changeHandler(searchText)),
// });

SearchBar.propTypes = {
  searchText: PropTypes.string,
};

export default connect(mapStateToProps, { changeHandler })(SearchBar);
