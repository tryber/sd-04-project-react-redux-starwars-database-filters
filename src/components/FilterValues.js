import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../actions';

class FilterValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: '',
      comparison: '',
      number: '',
    };

    this.onClick = this.onClick.bind(this);
  }

  updateColums() {
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotarion_period',
      'surface_water',
    ];
    return columns;
  }

  onChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  

  getCoparation() {
    const comparison = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select data-testid="comparison-filter" value={this.state.comparison} onChange={(event) => this.onChange(event, 'comparison')}>
        {comparison.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    );
  }

  onClick() {
    const { columns, comparison, number } = this.state;
    const { filterByNumericValues } = this.props;
    filterByNumericValues(columns, comparison, number);
    this.setState({ columns: '', comparison: '', number: '' });
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getCoparation()}
        <input data-testid="value-filter" type="number" value={this.state.number} onChange={(event) => this.onChange(event, 'number')} />
        <button data-testid="button-filter" onClick={this.onClick}>Filtrar</button>
      </div>
    );
  }
}

getColumns() {
    const { columns } = this.state;
    const select = this.updateColums();
    return (
      <select data-testid="column-filter" value={columns} onChange={(event) => this.onChange(event, 'columns')}>
        {select.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    );
  }

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumericValues: (columns, comparison, value) => {
    dispatch(filterByNumericValues(columns, comparison, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterValues);
