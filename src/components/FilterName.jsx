import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class FilterName extends Component {
  render() {
    const { filterName } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Nome do planeta"
          onChange={(e) => filterName(e.target.value)}
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
  filterName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(mapState, mapDispatch)(FilterName);
