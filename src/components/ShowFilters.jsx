import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class ShowFilters extends Component {
  render() {
    const { filterByNumberState } = this.props;
    return (
      <ul>
        {filterByNumberState.map((option) => (
          <li key={option.column}>
            {option.column}
            :
            {option.value}
            <button>X</button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumberState: state.filters.filterByNumericValues,
});
export default connect(mapStateToProps)(ShowFilters);

ShowFilters.propTypes = {
  filterByNumberState: PropTypes.arrayOf(PropTypes.object).isRequired,
};
