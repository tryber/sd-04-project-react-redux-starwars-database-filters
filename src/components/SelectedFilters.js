import React from 'react';
import { connect } from 'react-redux';

const SelectedFilters = ({ selectedFilters }) => selectedFilters.map((
  { column, comparison, value },
) => (
  <div key={column} data-testid="filter">
    {`${column} ${comparison} ${value}`}
  </div>
));

const mapStateToProps = (state) => ({
  selectedFilters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(SelectedFilters);
