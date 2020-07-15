import React from 'react';
import PropTypes from 'prop-types';

const CreateInputValue = ({ onChange, value }) => (
  <input
    style={{ width: '90px' }}
    value={value}
    onChange={(e) => onChange(e)}
    data-testid="value-filter"
    type="number"
    id="value"
  />
);

CreateInputValue.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CreateInputValue;
