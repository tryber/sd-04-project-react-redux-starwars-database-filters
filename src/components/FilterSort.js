import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateOrderColumn, updateOrderSort } from '../actions/index';

const options = [
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

const renderRadioButtons = (changeOrderSort) => (
  <div>
    <label htmlFor="asc">
      ASC
      <input
        name="order"
        type="radio"
        data-testid="column-sort-input"
        value="ASC"
        defaultChecked
        onChange={(event) => changeOrderSort(event.target.value)}
      />
    </label>
    <label htmlFor="desc">
      DESC
      <input
        name="order"
        type="radio"
        data-testid="column-sort-input"
        value="DESC"
        onChange={(event) => changeOrderSort(event.target.value)}
      />
    </label>
  </div>
);

const FilterSort = ({ changeOrderColumn, changeOrderSort }) => (
  <div>
    Ordem
    <select
      data-testid="column-sort"
      onChange={(event) => changeOrderColumn(event.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {renderRadioButtons(changeOrderSort)}
    <button type="button" data-testid="column-sort-button">
      Filtrar
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  data: state.starWarsAPIReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderColumn: (payload) => dispatch(updateOrderColumn(payload)),
  changeOrderSort: (payload) => dispatch(updateOrderSort(payload)),
});

FilterSort.propTypes = {
  changeOrderColumn: PropTypes.func.isRequired,
  changeOrderSort: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);
