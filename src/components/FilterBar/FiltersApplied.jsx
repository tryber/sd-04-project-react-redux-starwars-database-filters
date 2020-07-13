import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFilter } from '../../actions/filter';

const FiltersApplied = ({ filters, deleteFilter }) => {
  return (
    <div className="filters-applied">
      {filters.length > 0 ? <h4>Filters applied</h4> : null}
      {filters.map((filter) => (
        <div className="filters-card" key={filter.column}>
          <p>{filter.column}</p>
          <p>{filter.comparison}</p>
          <p>{filter.value}</p>
          <button onClick={() => deleteFilter(filter.column)} className="remove-button">
            remove filter
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFilter: (column) => dispatch(deleteFilter(column)),
});

FiltersApplied.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersApplied);
