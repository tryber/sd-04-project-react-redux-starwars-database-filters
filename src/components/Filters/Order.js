import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import { sortColumn } from '../../actions';
import sortFunc from '../functions/sortFunc';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit() {
    const { column, sort } = this.state;
    const { submitToSort, data } = this.props;
    // console.log(column, sort);
    sortFunc(data, column, sort);
    // console.log(data);
    submitToSort(column, sort);
  }
  render() {
    const columns = [
      'Name', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    return (
      <div>
        <select
          name="column" data-testid="column-sort" value={this.state.column}
          onChange={(event) => this.handleChange(event)}
        >
          {columns.map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
        </select>
        <input
          type="radio" data-testid="column-sort-input" name="sort" value="ASC"
          onClick={(event) => this.handleChange(event)}
        />
        <label htmlFor="sort">ASC</label>
        <input
          type="radio" data-testid="column-sort-input" name="sort" value="DESC"
          onClick={(event) => this.handleChange(event)}
        />
        <label htmlFor="sort">DESC</label>
        <button type="button" data-testid="column-sort-button" onClick={() => this.handleSubmit()}>
          sort
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
  column: state.filters.order.column,
  sort: state.filters.order.sort,
});

const mapDispatchToProps = (dispatch) => ({
  submitToSort: (column, sort) => dispatch(sortColumn(column, sort)),
});

Order.propTypes = {
  submitToSort: Proptypes.func.isRequired,
  data: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
