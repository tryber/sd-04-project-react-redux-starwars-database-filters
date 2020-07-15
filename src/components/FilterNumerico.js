import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    return (
      <div>
        <select data-testid='column-filter' onChange={(e) => this.setState({ column: e.target.value })}>
          <option value=''selected>colunas</option>
          <option value='population'>population</option>
          <option value='orbital_period'>orbital_period</option>
          <option value='diameter'>diameter</option>
          <option value='rotation_period'>rotation_period</option>
          <option value='surface_water'>surface_water</option>
        </select>
        <select data-testid='comparison-filter'  onChange={(e) => this.setState({ comparison: e.target.value })}>
          <option value='' selected>comparação</option>
          <option value='maior que'>maior que</option>
          <option value='menor que'>menor que</option>
          <option value='igual a'>igual a</option>
        </select>
        <input
          type="number" data-testid="value-filter"
          id="victor"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => this.props.comparison({ column, comparison, value })}
        >Filtrar</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  comparison: (Obj) => dispatch(comparisonFilterAction(Obj))
});

export default connect(null, mapDispatchToProps)(FilterNumerico)
