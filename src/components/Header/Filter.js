import { connect } from 'react-redux';
import React from 'react';
import { removeFilter } from '../../redux/actions';

const Filter = (props) => {
  console.log('filter', props);
  return (
    <div data-testid="filter">
      <h2>{props.filterString}</h2>
      <button onClick={() => props.removeFilter(props.column)} type="button">
        X
      </button>
    </div>
  );
};

export default connect(null, { removeFilter })(Filter);
