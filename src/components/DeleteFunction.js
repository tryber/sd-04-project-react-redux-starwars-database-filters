import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteFilterAction } from '../actions';

class DeleteFunction extends Component {
  render() {
    const { comparisonFilter, deleteFilter } = this.props;
    return (
      <div>
        <h2>Filtros:</h2>
        {comparisonFilter.map(({ column, comparison, value }) => (
          <div data-testid="filter">
            <p>{`${column} ${comparison} ${value}`}</p>
            <button type="button" onClick={() => deleteFilter({ column })}>X</button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    comparisonFilter: state.filters.filterByNumericValues,
  }
);

const mapDispatchToProps = (dispatch) => ({
  deleteFilter: (object) => dispatch(deleteFilterAction(object)),
});

DeleteFunction.propTypes = {
  deleteFilter: PropTypes.func.isRequired,
  comparisonFilter: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFunction);
