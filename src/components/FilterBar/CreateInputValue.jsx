import React from 'react';
import PropTypes from 'prop-types';

const CreateInputValue = ({ handleChange, value }) => (
  <input
    style={{ width: '90px' }}
    value={value}
    onChange={(e) => handleChange(e)}
    data-testid="value-filter"
    type="number"
    id="value"
  />
);

CreateInputValue.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CreateInputValue;
