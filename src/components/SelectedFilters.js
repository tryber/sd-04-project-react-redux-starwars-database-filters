import React from 'react';
import { connect } from 'react-redux';
import { removeFilters } from '../actions/removeFilters';

const SelectedFilters = ({ selectedFilters, excluirFilters }) => selectedFilters.map(
  ({ column, comparison, value }) => (
    <div key={column} data-testid="filter">
      {`${column} ${comparison} ${value}`}
      <button type="button" onClick={() => excluirFilters(column)}>
        X
      </button>
    </div>
  ),
);

const mapStateToProps = (state) => ({
  selectedFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  excluirFilters: (column) => dispatch(removeFilters(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);
