import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { removeNumericFilter } from '../../actions';

function FilterItem({ filter: { column, comparison, value }, onRemoveNumericFilter }) {
  return (
    <div data-testid="filter">
      {`${column} ${comparison} ${value}`}
      <button type="button" onClick={() => onRemoveNumericFilter(column)}>X</button>
    </div>
  );
}

FilterItem.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onRemoveNumericFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveNumericFilter: (column) => dispatch(removeNumericFilter(column)),
});

export default connect(null, mapDispatchToProps)(FilterItem);
