import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class FilterName extends Component {
  render() {
    const { onFilterByName } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Type a planet name"
          onChange={(event) => onFilterByName(event.target.value)}
        />
      </div>
    );
  }
}

FilterName.propTypes = {
  onFilterByName: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatch = (dispatch) => ({
  onFilterByName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(mapState, mapDispatch)(FilterName);
