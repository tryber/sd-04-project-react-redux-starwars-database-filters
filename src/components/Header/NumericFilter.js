import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNumericFilter } from '../../actions';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class NumericFilter extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();
    this.props.onUpdateNumericFilter(this.state);
  }

  onChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <select name="column" data-testid="column-filter" onChange={this.onChange} required>
          <option value="" defaultValue hidden>Coluna</option>
          {columns.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <select name="comparison" data-testid="comparison-filter" onChange={this.onChange} required>
          <option value="" defaultValue hidden>Comparação</option>
          <option value="greater">Maior que</option>
          <option value="lesser">Menor que</option>
          <option value="equal">Igual a</option>
        </select>
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          placeholder="Valor"
          onChange={this.onChange}
          required
        />
        <button data-testid="button-filter" type="submit">Filtrar</button>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  onUpdateNumericFilter: (filter) => dispatch(updateNumericFilter(filter)),
});

export default connect(null, mapDispatchToProps)(NumericFilter);
