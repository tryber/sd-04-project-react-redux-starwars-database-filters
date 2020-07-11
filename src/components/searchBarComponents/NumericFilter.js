import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numericFilter } from '../../actions';

const ColumSelect = () => {
  return (
    <div>
      <select name="select" data-testid="column-filter" >
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </div>
  );
};

const ComparasionSelect = () => {
  return (
    <div>
      <select name="select" data-testid="comparison-filter">
        <option value="less">less than</option>
        <option value="bigger">bigger than</option>
        <option value="equal">equal to</option>
      </select>
    </div>
  );
};

class NumericFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparision: '',
      value: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.numericFilter(event);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleClick(e)}>
        <select name="select" data-testid="column-filter" >
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select name="select" data-testid="comparison-filter">
          <option value="less">less than</option>
          <option value="bigger">bigger than</option>
          <option value="equal">equal to</option>
        </select>
        <input type="number" data-testid="value-filter" />
        <button type="submit" data-testid="button-filter">Filter</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  numericFilter: (event) => dispatch(numericFilter(event.target)),
});

export default connect(null, mapDispatchToProps)(NumericFilter);

NumericFilter.propTypes = {
  numericFilter: PropTypes.func.isRequired,
};