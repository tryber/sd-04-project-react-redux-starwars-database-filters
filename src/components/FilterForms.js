import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveFilterData } from '../actions';

const FilterForms = ({ submitFilterData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { column, comparison, number } = event.target;
    // console.log(event.target.column.value);
    console.log(event.target.comparison.value);
    console.log(event.target);
    submitFilterData(column.value, comparison.value, Number(number.value));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select data-testid="column-filter" name="column">
          <option />
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" name="comparison">
          <option />
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
        <input data-testid="value-filter" type="number" name="number" />
        <button type="submit" data-testid="button-filter">acionar filtro</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  submitFilterData: (column, comparison, number) => (
    dispatch(saveFilterData(column, comparison, number))
  ),
});

FilterForms.propTypes = {
  submitFilterData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterForms);
