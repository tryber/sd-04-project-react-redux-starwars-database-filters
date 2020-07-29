import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class FilterName extends Component {
  render() {
    const { filterName } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="type a planet name"
          onChange={(e) => filterName(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);

FilterName.propTypes = {
  filterName: PropTypes.string.isRequired,
};
