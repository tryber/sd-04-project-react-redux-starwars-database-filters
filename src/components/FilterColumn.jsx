import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const optionsArray = [
  { value: '', innerHtml: 'Column' },
  { value: 'population', innerHtml: 'population' },
  { value: 'orbital_period', innerHtml: 'orbital_period' },
  { value: 'diameter', innerHtml: 'diameter' },
  { value: 'rotation_period', innerHtml: 'rotation_period' },
  { value: 'surface_water', innerHtml: 'surface_water' },
];

const FilterColumn = ({ onChange, value, selectedFilters }) => (
  <select
    name="column-filter"
    id="column-filter"
    data-testid="column-filter"
    value={value}
    onChange={onChange}
  >
    {optionsArray
      .filter((item) => !selectedFilters.includes(item.value))
      .map((item) => {
        if (!item.value) {
          return (
            <option key={item.innerHtml} value={item.value} disabled hidden>
              {item.innerHtml}
            </option>
          );
        }
        return (
          <option key={item.innerHtml} value={item.value}>
            {item.innerHtml}
          </option>
        );
      })}
  </select>
);

const mapStateToProps = (state) => ({
  selectedFilters: state.filters.filterByNumericValues.map(
    (item) => item.column,
  ),
});

FilterColumn.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(FilterColumn);
