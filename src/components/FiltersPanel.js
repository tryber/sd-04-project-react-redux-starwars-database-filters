import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';

const FiltersPanel = ({ filters }) => {
  if (filters.length > 0) {
    return (
      <div>
        <h4>Filters</h4>
        <div>
          <ul>
            {filters.map(({ column, comparison, value }) => (
              <li key={column} data-testid="filter">
                {`${column} ${comparison} ${value}`}
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
};

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(FiltersPanel);
