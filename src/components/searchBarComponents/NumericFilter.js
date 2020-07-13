import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numericFilter } from '../../actions';

class NumericFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.availableFilters = this.availableFilters.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { state } = this;
    this.props.numericFilter(state);
  }

  availableFilters() {
    const filters = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const { filterByNumericValues } = this.props;
    let newFilter = filters;
    filterByNumericValues.forEach(({ column }) => {
      newFilter = newFilter.filter((elem) => elem !== column);
    });
    return newFilter;
  }

  render() {
    const optionFilter = this.availableFilters();
    return (
      <form onSubmit={(e) => this.handleClick(e)}>
        <select
          data-testid="column-filter" name="select"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          <option defaultValue>Column</option>
          {optionFilter.map((filter) => (
            <option key={filter} value={filter}>{filter}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter" name="select"
          onChange={(e) => this.setState({ comparison: e.target.value })}
        >
          <option defaultValue>Comparison</option>
          <option value="less than">menor que</option>
          <option value="grather than">maior que</option>
          <option value="equal to">igual a</option>
        </select>
        <input
          data-testid="value-filter" type="number"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button type="submit" data-testid="button-filter">Filter</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  numericFilter: (event) => dispatch(numericFilter(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumericFilter);

NumericFilter.propTypes = {
  numericFilter: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
