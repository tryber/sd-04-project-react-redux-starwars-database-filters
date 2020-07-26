import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions/dataAction';

class FilterName extends Component {
  render() {
    const { planetName, filterName } = this.props;
    return (
      <div>
        <label htmlFor="filter">Procurar</label>
        <input
          data-testid="name-filter"
          onChange={(e) => filterName(e.target.value)}
          value={planetName}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetName: state.filterReducer.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterName: (value) => dispatch(filterByName(value)),
});

FilterName.propTypes = {
  filterName: PropTypes.func.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
