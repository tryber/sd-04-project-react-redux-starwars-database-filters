import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByName } from '../../redux/actions';
// import { createStore } from 'redux';

class ByName extends Component {
  render() {
    const { ByName } = this.props;
    return (
      <input
        type="text"
        data-testid="name-filter"
        placeholder="filter by name"
        onChange={(event) => ByName(event.target.value)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  ByName: (Name) => dispatch(filterByName(Name)),
});

ByName.propTypes = {
  ByName: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ByName);
