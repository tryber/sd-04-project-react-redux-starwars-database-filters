import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderFilter } from '../../actions';

class SortFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { column: '', sort: '' };
    this.input = this.input.bind(this);
  }

  input(value) {
    return (
      <label htmlFor="sort">
        <input
          data-testid="column-sort-input" name="sort" type="radio" value={value}
          onChange={(e) => this.setState({ sort: e.target.value })}
        />
        {value}
      </label>
    );
  }

  render() {
    const columnsList = ['name', 'climate', 'gravity', 'terrain', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    return (
      <div className="sortInput">
        <label htmlFor="select">Sort Columns</label>
        <br />
        <select
          data-testid="column-sort" name="select" className="input"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          <option defaultValue>Column</option>
          {columnsList.map((column) => (
            <option key={column} value={column}>{column}</option>
          ))}
        </select>
        <br />
        {this.input('ASC')}
        {this.input('DSC')}
        <br />
        <button
          data-testid="column-sort-button" type="button"
          onClick={() => this.props.orderFilter(this.state)}
        >
          Order
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  orderFilter: (state) => dispatch(orderFilter(state)),
});

export default connect(null, mapDispatchToProps)(SortFilter);

SortFilter.propTypes = {
  orderFilter: PropTypes.func.isRequired,
};
