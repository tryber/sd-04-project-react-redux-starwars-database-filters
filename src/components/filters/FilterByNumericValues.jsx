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
    console.log(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setFilterValues } = this.props;
    const { column, comparison, value } = this.state;
    // console.log(event.target.column.value);
    setFilterValues(column, comparison, value);
  }

  renderSelectColumn() {
    const { options } = this.props;
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
      <select name="comparison" onChange={(event) => this.handleOnChange(event)} data-testid="comparison-filter">
        <option defaultChecked>Comparação</option>
        {comparison.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderSelectColumn()}
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
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValues: (column, comparison, value) => dispatch(saveFilterData(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByNumericValues);
