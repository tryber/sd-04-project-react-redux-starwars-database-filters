import React, { Component } from 'react';
import { filterByName } from '../actions';
import { connect } from 'react-redux';

class FilterName extends Component {
  render() {
    const { filterByName } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Type a planet name"
          onChange={(event) => filterByName(event.target.value)}
        />
      </div>
    )
  }
}

const mapState = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatch = (dispatch) => ({
  filterByName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(mapState, mapDispatch)(FilterName);
