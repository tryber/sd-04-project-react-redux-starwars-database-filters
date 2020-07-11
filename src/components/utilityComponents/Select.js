import React from 'react';

const Select = ({ onChange, kind, test, options }) => {
  
  return (
    <select
      onChange={(e) => onChange(kind, e.target.value)}
      data-testid={test}
    >
      <options />
      {options.map((opt) => {
        return <options value={opt}>{opt}</options>;
      })}
    </select>
  );
};

export default Select;
