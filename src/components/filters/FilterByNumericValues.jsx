import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  }

  handleOnChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setFilterValues } = this.props;
    const { column, comparison, number } = this.state;
    // console.log(event.target.column.value);
    setFilterValues(column, comparison, number);
  }

  renderSelectColumn() {
    const { options } = this.props;
    return (
      <select onChange={(e) => this.handleOnChange(e)} data-testid="column-filter">
        {options.map((column) => (
          <option
            name={column}
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
      <select onChange={(event) => this.handleOnChange(event)} data-testid="comparison-filter">
        {comparison.map((e) => <option name="comparison" key={e} value={e}>{e}</option>)}
      </select>
    );
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderSelectColumn()}
        {this.renderSelectComparison()}
        <input
          onChange={(e) => this.handleOnChange(e)}
          data-testid="value-filter"
          type="number"
          name="number"
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
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValues: (column, comparison, number) => dispatch(saveFilterData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByNumericValues);
