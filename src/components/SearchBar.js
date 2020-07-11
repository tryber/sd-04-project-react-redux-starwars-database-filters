import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchText } from '../actions';

class SearchBar extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <label htmlFor="search-text">
          Name Search:
          <input type="text" data-testid="name-filter" onChange={(e) => this.props.searchText(e)} />
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchText: (event) => dispatch(searchText(event.target.value)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  searchText: PropTypes.func.isRequired,
};
