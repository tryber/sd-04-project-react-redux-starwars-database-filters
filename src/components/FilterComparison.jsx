import React from 'react';
import PropTypes from 'prop-types';

const optionsArray = [
  { value: '', innerHtml: 'Comparison' },
  { value: 'maior que', innerHtml: 'maior que' },
  { value: 'menor que', innerHtml: 'menor que' },
  { value: 'igual a', innerHtml: 'igual a' },
];

const FilterComparison = ({ onChange, value }) => (
  <select
    name="comparison-filter"
    id="comparison-filter"
    value={value}
    data-testid="comparison-filter"
    onChange={onChange}
  >
    {optionsArray.map((item) => {
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

FilterComparison.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterComparison;
