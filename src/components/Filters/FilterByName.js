import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByName } from '../../actions';

// import { createStore } from 'redux';

class ByName extends Component {
  render() {
    const { filterName } = this.props;
    return (
      <input
        type="text"
        data-testid="name-filter"
        placeholder="filter by name"
        onChange={(event) => filterName(event.target.value)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterName: (Name) => dispatch(filterByName(Name)),
});

ByName.propTypes = {
  filterName: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ByName);
