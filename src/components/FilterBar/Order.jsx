import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';
import { filterOrder } from '../../actions/filter';
import planetHeaders from '../../services/data';

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
        <select
          onChange={(event) => this.handleChange(event)}
          data-testid="column-sort"
          name="column"
          id="column"
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
        <h3>Filter by order</h3>
        {this.createSelectOrder()}
        <label htmlFor="ASC">ASC</label>
        <input
          value="ASC"
          onChange={(event) => this.handleChange(event)}
          name="sort"
          id="ASC"
          type="radio"
          data-testid="column-sort-input"
        />

        <label htmlFor="DESC">DESC</label>
        <input
          value="DESC"
          onChange={(event) => this.handleChange(event)}
          name="sort"
          id="DESC"
          type="radio"
          data-testid="column-sort-input"
        />

        <button
          className="btn-small btn-dark"
          onClick={() => this.handleSubmit()}
          data-testid="column-sort-button"
          type="button"
        >
          Filter
        </button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  changeSort: (column, sort) => dispatch(filterOrder(column, sort)),
});

Order.propTypes = {
  changeSort: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Order);
