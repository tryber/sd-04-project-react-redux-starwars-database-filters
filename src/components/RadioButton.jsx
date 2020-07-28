import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionRadio } from '../actions/actionFilter';

const radionButton = ({ dispatchRadio, orderColumn, order }) => {
  const sortlines = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];
  return (
    <div>
      <select
        onChange={(event) => dispatchRadio(order, event.target.value)}
        data-testid="column-sort"
      >
        {sortlines.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <label htmlFor="ASC">
        <input
          onChange={() => dispatchRadio('ASC', orderColumn)}
          type="radio"
          name="radio"
          data-testid="column-sort-input"
          value="ASC"
        />
        ASC
      </label>
      <label htmlFor="DESC">
        <input
          onChange={() => dispatchRadio('DESC', orderColumn)}
          type="radio"
          name="radio"
          data-testid="column-sort-input"
          value="DESC"
        />
        DESC
      </label>
      <button data-testid="column-sort-button" type="button">
        Sort
      </button>
    </div>
  );
};

radionButton.propTypes = {
  dispatchRadio: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderColumn: PropTypes.shape({
    toLowerCase: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispacth) => ({
  dispatchRadio: (a, b) => dispacth(actionRadio(a, b)),
});

const mapStateToProps = (state) => ({
  order: state.filters.order.sort,
  orderColumn: state.filters.order.column,
});

export default connect(mapStateToProps, mapDispatchToProps)(radionButton);
