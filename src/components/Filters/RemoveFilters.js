import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import { removeFilters } from '../../actions';

class RemoveFilters extends Component {
  handleRemoveFilter(item) {
    const { removeFilter } = this.props;
    removeFilter(item);
  }
  render() {
    const { numericValues } = this.props;
    return numericValues.map((item) => (
      <div data-testid="filter" key={item.value}>
        <span>{`${item.column} ${item.comparison} ${item.value}`}</span>
        <button type="button" onClick={() => this.handleRemoveFilter(item)}>
          x
        </button>
      </div>
    ));
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (filters) => dispatch(removeFilters(filters)),
});

RemoveFilters.propTypes = {
  removeFilter: Proptypes.func.isRequired,
  numericValues: Proptypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilters);
