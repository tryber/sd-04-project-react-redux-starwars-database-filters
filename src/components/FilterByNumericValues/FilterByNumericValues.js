import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues } from '../../actions/index';

const initialColumnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const columnsToRender = (columnsNotRender) => {
  if (columnsNotRender.length === 0) return initialColumnOptions;
  const usedColumns = columnsNotRender.map((numericFilter) => numericFilter.column);
  return initialColumnOptions.filter((columnOption) => !usedColumns.includes(columnOption));
};

const FilterByNumericValues = (props) => {
  const { filteredColumns } = props;
  const [column, setColumn] = React.useState('');
  const [comparison, setComparison] = React.useState('');
  const [value, setValue] = React.useState('');

  return (
    <div className="filter-by-numbers">
      <select data-testid="column-filter" onChange={(e) => setColumn(e.target.value)}>
        <option>SELECT</option>
        {columnsToRender(filteredColumns).map((columnOption) => (
          <option key={columnOption}>{columnOption}</option>
        ))}
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

const mapStateToProps = (state) => ({
  filteredColumns: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, { filterByNumericValues })(FilterByNumericValues);

FilterByNumericValues.propTypes = {
  filterByNumericValues: PropTypes.func.isRequired,
  filteredColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
};
