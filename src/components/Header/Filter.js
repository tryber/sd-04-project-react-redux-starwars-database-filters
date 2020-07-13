import PropTypes from 'prop-types';
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

Filter.propTypes = {
  column: PropTypes.string,
  filterString: PropTypes.string,
  removeFilter: PropTypes.func,
};

export default connect(null, { removeFilter })(Filter);
