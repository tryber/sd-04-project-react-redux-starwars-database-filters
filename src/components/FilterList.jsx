import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeNumericFilter } from '../actions/filters';

const FilterList = ({ filters, removeFilter }) => (
  <div>
    <p>Filters</p>
    {filters.map((item, index) => (
      <div key={item.column} data-testid="filter">
        <p>{`${item.column} ${item.comparison} ${item.value}`}</p>
        <button type="button" onClick={() => removeFilter(index)}>
          X
        </button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (index) => dispatch(removeNumericFilter(index)),
});

FilterList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
