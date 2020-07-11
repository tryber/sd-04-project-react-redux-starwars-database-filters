import React from 'react';
import { connect } from 'react-redux';
import { searchBar } from '../actions/searchBarActions';

class SearchBar extends React.Component {
  render() {
    const { value, searchBar } = this.props;
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
