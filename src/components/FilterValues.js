import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues } from '../actions/dataAction';

class FilterValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      number: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  updateColumns() {
    const { numericValues } = this.props;
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const chosenColumns = numericValues.map(({ column }) => column);
    return columns.filter((item) => !chosenColumns.includes(item));
  }

  onChange(e, field) {
    this.setState({ [field]: e.target.value });
  }

  getComparation() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        value={this.state.comparation}
        onChange={(e) => this.onChange(e, 'comparation')}
      >
        {comparation.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  onClick() {
    const { column, comparation, number } = this.state;
    const { filterByNumber } = this.props;
    filterByNumber(column, comparation, number);
    this.setState({ column: '', comparation: '', number: '' });
  }

  getColumns() {
    const select = this.updateColumns();
    return (
      <select
        value={this.state.column}
        onChange={(e) => this.onChange(e, 'column')}
      >
        {select.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getComparation()}
        <input
          type="number"
          value={this.state.number}
          onChange={(e) => this.onChange(e, 'number')}
        />
        <button onClick={this.onClick}>Filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumber: (column, comparison, number) =>
    dispatch(filterByNumericValues(column, comparison, number)),
});

FilterValues.propTypes = {
  numericValues: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
  filterByNumber: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterValues);
