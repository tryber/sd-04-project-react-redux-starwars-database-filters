import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class FilterName extends Component {
  render() {
    const { filterByName } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Nome do planeta"
          onChange={(e) => filterByName(e.target.value)}
          data-testid="name-filter"
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  name: state.filters.filterByName.name,
});
const mapDispatch = (dispatch) => ({
  filterByName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(mapState, mapDispatch)(FilterName);
