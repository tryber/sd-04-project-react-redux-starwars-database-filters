import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFilter } from '../actions/index';

const FiltersInUse = ({ filterByNumericValues, remove }) => {
  if (typeof filterByNumericValues && filterByNumericValues.length > 0) {
    return (
      <div>
        <ul>
          {filterByNumericValues.map((filter) => (
            <li data-testid="filter" key={`${filter.column}`}>
              {`${filter.column} ${filter.comparison} ${filter.value}`}
              <button type="button" onClick={() => remove(filter.column)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <p>Nothing being filtered!</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (filterToRemove) => dispatch(removeFilter(filterToRemove)),
});

FiltersInUse.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersInUse);
