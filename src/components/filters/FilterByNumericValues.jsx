import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveFilterData } from '../../actions/actionCreators';

class FilterByNumericValues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.renderSelectColumn = this.renderSelectColumn.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
  }

  handleOnChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setFilterValues } = this.props;
    const { column, comparison, value } = this.state;
    // console.log(event.target.column.value);
    setFilterValues(column, comparison, value);
  }

   filterOptions() {
      const { filterByNumericValues, options } = this.props;
      let newOptions = [...options];
      if (filterByNumericValues.length >= 1) {
        filterByNumericValues.forEach(({ column }) => {
          newOptions = newOptions.filter((option) => option !== column);
        });
      }
      return newOptions;
   }

  renderSelectColumn(options) {
    return (
      <select name="column" onChange={(e) => this.handleOnChange(e)} data-testid="column-filter">
        <option defaultChecked>Coluna</option>
        {options.map((column) => (
          <option
            key={column}
            value={column}
          >
            {column}
          </option>
        ))}
      </select>
    );
  }

  renderSelectComparison() {
    const comparison = ['maior que', 'menor que', 'igual a'];
    return (
      <select
        name="comparison"
        onChange={(event) => this.handleOnChange(event)}
        data-testid="comparison-filter"
      >
        <option defaultChecked>Comparação</option>
        {comparison.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
    );
  }

  render() {
    const newOptions = this.filterOptions();
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderSelectColumn(newOptions)}
        {this.renderSelectComparison()}
        <input
          onChange={(e) => this.handleOnChange(e)}
          data-testid="value-filter"
          type="number"
          name="value"
        />
        <button type="submit" data-testid="button-filter">
            acionar filtro
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.filters.options,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValues: (column, comparison, value) => dispatch(
    saveFilterData(column, comparison, value),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByNumericValues);

FilterByNumericValues.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFilterValues: PropTypes.func.isRequired,
  numericFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};
