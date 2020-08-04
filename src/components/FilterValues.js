import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../actions';

class FilterValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparation: '',
      number: '',
    };

    this.onClick = this.onClick.bind(this);
  }


  onChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  getCoparation() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select data-testid="comparison-filter" value={this.state.comparation} onChange={(event) => this.onChange(event, 'comparation')}>
        {comparation.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    );
  }

  onClick() {
    const { column, comparation, number } = this.state;
    const { filterByNumericValues } = this.props;
    filterByNumericValues(column, comparation, number);
    this.setState({ column: '', comparation: '', number: '' });
  }

  getColumns() {
    const select = this.updateColums();
    return (
      <select data-testid="column-filter" value={this.state.column} onChange={(event) => this.onChange(event, 'column')}>
        {select.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  updateColums() {
    const column = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return column;
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getCoparation()}
        <input
          type="number"
          value={this.state.number}
          data-testid="value-filter"
          onChange={(event) => this.onChange(event, 'number')}
        />
        <button onClick={this.onClick} data-testid="button-filter">
          Filtrar
        </button>
      </div>
    );
  }
}

FilterValues.propTypes = {
  filterByNumericValues: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumericValues: (column, comparison, value) => {
    dispatch(filterByNumericValues(column, comparison, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterValues);
