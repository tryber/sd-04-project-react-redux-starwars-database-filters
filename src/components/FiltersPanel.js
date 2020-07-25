import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { removeFilter } from '../actions/filterPlanetByName';

const FiltersPanel = ({ filters, dispatchRemoveFilter }) => {
  if (filters.length > 0) {
    return (
      <div>
        <h4>Filters</h4>
        <div>
          <ul>
            {filters.map(({ column, comparison, value }, index) => (
              <li key={column} data-testid="filter">
                {`${column} ${comparison} ${value}`}
                <button
                  type="button"
                  onClick={() => dispatchRemoveFilter(filters[index])}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return <p>Add a filter</p>;
};

FiltersPanel.propTypes = {
  filters: PropTypes.arrayOf(object).isRequired,
  dispatchRemoveFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveFilter: (filter) => dispatch(removeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPanel);
