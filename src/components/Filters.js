import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterCombiner } from '../action/actionFilter';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colunmFilter: '',
      comparFilter: '',
      numberFilter: '',
    };

    this.updateCategorias = this.updateCategorias.bind(this);
  }

  getState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  updateCategorias() {
    const { filterCompar } = this.props;

    const columnCategorias = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    const optColumns = filterCompar.map(({ column }) => column);
    return [
      ...columnCategorias.filter((option) => !optColumns.includes(option)),
    ];
  }

  firstFilter() {
    const options = this.updateCategorias();

    return (
      <div>
        <select
          data-testid='column-filter'
          onChange={(e) => this.getState('colunmFilter', e.target.value)}
        >
          <option>Coluna</option>
          {options.map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  SecondFilter() {
    const { btnInput } = this.props;
    const { colunmFilter, comparFilter, numberFilter } = this.state;
    return (
      <div>
        <select
          data-testid='comparison-filter'
          onChange={(e) => this.getState('comparFilter', e.target.value)}
        >
          <option value=''>Comparação</option>
          <option value='maior que'>maior que</option>
          <option value='igual a'>igual a</option>
          <option value='menor que'>menor que</option>
        </select>
        <input
          type='number'
          data-testid='value-filter'
          onChange={(e) => this.getState('numberFilter', e.target.value)}
        />
        <button
          type='button'
          data-testid='button-filter'
          onClick={() => btnInput(colunmFilter, comparFilter, numberFilter)}
        >
          Filtrar
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.firstFilter()}
        {this.SecondFilter()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  btnInput: (column, compar, number) =>
    dispatch(filterCombiner(column, compar, number)),
});

const mapStateToProps = (state) => ({
  filterCompar: state.filters.filterByNumericValues,
});

Filters.propTypes = {
  btnInput: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
