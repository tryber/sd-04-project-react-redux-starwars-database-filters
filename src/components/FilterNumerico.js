import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { comparisonFilterAction } from '../actions/index';

export class FilterNumerico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'colunas',
      comparison: 'comparaçao',
      value: 0,
    };
  }
  render() {
    const { column, comparison, value } = this.state;
    const comparisons = ['maior que', 'menor que', 'igual a'];
    const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const listSelected = this.props.colunaSelect.map((option) => option.column);
    return (
      <div>
        <select
          data-testid="column-filter" onChange={(e) => this.setState({ column: e.target.value })}
        >
          <option value="" selected>colunas</option>
          {columns.filter((element) => !listSelected.includes(element))
            .map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(e) => this.setState({ comparison: e.target.value })}
        >
          <option value="" selected>comparação</option>
          {comparisons.map((element) => <option key={element} value={element}>{element}</option>)}
        </select>
        <input
          type="number" data-testid="value-filter"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button
          type="button" data-testid="button-filter"
          onClick={() => this.props.comparison({ column, comparison, value })}
        >Filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  colunaSelect: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  comparison: (Obj) => dispatch(comparisonFilterAction(Obj)),
});

FilterNumerico.propTypes = {
  comparison: PropTypes.shape.isRequired,
  colunaSelect: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumerico);
