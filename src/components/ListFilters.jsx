import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilter } from '../actions';

class ListFilters extends Component {
  render() {
    const { numericValues, removeFilter } = this.props;
    return (
      <div data-testid="filter">
        <h3>Filtros</h3>
        {numericValues.map(({ column, comparison, value }) => {
          return (
            <div key={column}>
              {column} {comparison} {value}
              <button type="button" onClick={() => removeFilter(column)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (column) => dispatch(removeFilter(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters);

ListFilters.propTypes = {
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFilter: PropTypes.func.isRequired,
};
