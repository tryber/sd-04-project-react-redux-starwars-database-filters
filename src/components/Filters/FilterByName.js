import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByName } from '../../redux/actions';
// import { createStore } from 'redux';

class FilterByName extends Component {
  render() {
    const { filterByName } = this.props;
    return (
      <input
        type="text"
        data-testid="name-filter"
        placeholder="filter by name"
        onChange={(event) => filterByName(event.target.value)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (Name) => dispatch(filterByName(Name)),
});

FilterByName.propTypes = {
  filterByName: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByName);
