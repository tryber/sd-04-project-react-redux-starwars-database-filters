import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues } from '../../actions/index';

const FilterByNumericValues = (props) => {
  const [column, setColumn] = React.useState('');
  const [comparison, setComparison] = React.useState('');
  const [value, setValue] = React.useState(0);

  return (
    <div className="filter-by-numbers">
      <select data-testid="column-filter" onChange={(e) => setColumn(e.target.value)}>
        <option>SELECT</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter" onChange={(e) => setComparison(e.target.value)}>
        <option>SELECT</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input data-testid="value-filter" type="number" onChange={(e) => setValue(e.target.value)} />
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => props.filterByNumericValues(column, comparison, value)}
      >
        Filter
      </button>
    </div>
  );
};

export default connect(null, { filterByNumericValues })(FilterByNumericValues);

FilterByNumericValues.propTypes = {
  filterByNumericValues: PropTypes.func.isRequired,
};
