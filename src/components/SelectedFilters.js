import React from 'react';
import { connect } from 'react-redux';
import { removeFilters } from '../actions/removeFilters';

const SelectedFilters = ({ selectedFilters, excluirFilters }) => selectedFilters.map(
  ({ column, comparison, value }) => (
    <div className="btn bg-info" key={column} data-testid="filter">
      {`${column} ${comparison} ${value}`}
      <div className="btn">
        <button className="btn bg-danger" type="button" onClick={() => excluirFilters(column)}>
          X
        </button>
      </div>
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
