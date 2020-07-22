import React from 'react';
import planetHeaders from '../../services/data';
import { connect } from 'react-redux';
import { Component } from 'react';
import { filterOrder } from '../../actions/filter';

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      sort: '',
    };
  }

  createSelectOrder() {
    return (
      <div>
        <label htmlFor="sort">Sort the Planets</label>
        <select
          onChange={(event) => this.handleChange(event)}
          data-testid="column-sort"
          name="sort"
          id="sort"
        >
          <option value="">Choose the column</option>
          {planetHeaders.map((header) => (
            <option key={header} value={header}>
              {header}
            </option>
          ))}
        </select>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    const { column, sort } = this.state;
    this.props.changeSort(column, sort);
    this.setState({ column: '', sort: '' });
  }

  render() {
    return (
      <form>
        {this.createSelectOrder()}
        <label htmlFor="ASC">ASC</label>
        <input
          value="ASC"
          onChange={(event) => this.handleChange(event)}
          name="column"
          id="ASC"
          type="radio"
          data-testid="column-sort-input"
        />

        <label htmlFor="DESC">DESC</label>
        <input
          value="DESC"
          onChange={(event) => this.handleChange(event)}
          name="column"
          id="DESC"
          type="radio"
          data-testid="column-sort-input"
        />

        <button onClick={() => this.handleSubmit()} data-testid="column-sort-button" type="button">
          Filter
        </button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  changeSort: (column, sort) => dispatch(filterOrder(column, sort)),
});

const mapState = (state) => ({
  sort: state.filters.order.sort,
});

export default connect(mapState, mapDispatch)(Order);
