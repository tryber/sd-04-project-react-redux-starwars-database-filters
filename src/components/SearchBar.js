import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText } = this.props;
    return (
      <div>
        <label htmlFor="search-text"> Name Search:
          <input type="text" data-testid="name-filter" onChange={(e) => searchText(e)} />
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  (event) => dispatch(searchText(event.target.value)),
};

export default connect(mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  searchText: PropTypes.func.isRequired,
};
