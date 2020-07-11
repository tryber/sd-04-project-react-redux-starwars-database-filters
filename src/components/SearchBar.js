import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBar } from '../actions/searchBarActions';

class SearchBar extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <input
        data-testid="name-filter"
        className="form-control col-3"
        placeholder="Search a Planet"
        onChange={(e) => searchBar(e.target.value)}
        value={value}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  value: state.filters.value,
});
const mapDispatchToProps = (dispatch) => ({
  searchBar: (e) => dispatch(searchBar(e)),
});

SearchBar.propTypes = {
  searchBar: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
