import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterValues } from '../../actions/filter';

class NumericSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };

    this.createSelectColumn = this.createSelectColumn.bind(this);
    this.createSelectComparison = this.createSelectComparison.bind(this);
    this.createInputValue = this.createInputValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createSelectColumn(onChange, value) {
    return (
      <select value={value} onChange={onChange} data-testid="column-filter" id="column">
        <option value="">Column</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    );
  }

  createSelectComparison(onChange, value) {
    return (
      <select value={value} onChange={onChange} data-testid="comparison-filter" id="comparison">
        <option defaultValue>Comparison</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
    );
  }

  createInputValue(onChange, value) {
    return (
      <input
        value={value}
        onChange={onChange}
        data-testid="value-filter"
        type="number"
        id="value"
      />
    );
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit() {
    const { column, comparison, value } = this.state;
    const { changeValues } = this.props;
    changeValues(column, comparison, value);
    this.setState({ column: '', comparison: '', value: '' });
  }

  render() {
    const { column, comparison, value } = this.state;
    return (
      <form>
        {this.createSelectColumn((e) => this.handleChange(e), column)}
        {this.createSelectComparison((e) => this.handleChange(e), comparison)}
        {this.createInputValue((e) => this.handleChange(e), value)}

        <button onClick={() => this.handleSubmit()} data-testid="button-filter" type="button">
          Aply filter
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeValues: (column, comparison, value) => dispatch(filterValues(column, comparison, value)),
});

NumericSearch.propTypes = {
  changeValues: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NumericSearch);
