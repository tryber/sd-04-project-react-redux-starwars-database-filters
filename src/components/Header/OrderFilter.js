import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateOrder } from '../../actions';

const cols = ['name', 'rotation_period', 'orbital_period',
  'diameter', 'climate', 'gravity', 'terrain',
  'surface_water', 'population', 'films', 'created', 'edited', 'url'];

class OrderFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'name',
      sort: 'ASC',
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  onClick() {
    this.props.onUpdateOrder(this.state);
  }

  render() {
    return (
      <div>
        Ordem:
        <select name="column" onChange={this.onChange} data-testid="column-sort">
          {cols.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <label htmlFor="asc">ASC</label>
        <input
          data-testid="column-sort-input"
          type="radio"
          name="sort"
          id="asc"
          value="ASC"
          defaultChecked
          onClick={this.onChange}
        />
        <label htmlFor="dsc">DESC</label>
        <input
          data-testid="column-sort-input"
          type="radio"
          name="sort"
          id="dsc"
          value="DESC"
          onClick={this.onChange}
        />
        <button data-testid="column-sort-button" type="button" onClick={this.onClick}>
          Filtrar
        </button>
      </div>
    );
  }
}

OrderFilter.propTypes = {
  onUpdateOrder: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateOrder: (order) => dispatch(updateOrder(order)),
});

export default connect(null, mapDispatchToProps)(OrderFilter);
