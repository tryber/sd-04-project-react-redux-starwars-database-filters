import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortData } from '../util';
import { sortFilter } from '../actions/index';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
    this.handler = this.handler.bind(this);
  }

  handler({ name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { options, data, sortFilter } = this.props;
    const { column, sort } = this.state;
    return (
      <div>
        <select
          data-testid="column-sort"
          name="column"
          onChange={(event) => this.handler(event.target)}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value="ASC"
          onClick={(event) => this.handler(event.target)}
        />
        <label htmlFor="sort">ASC</label>
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value="DESC"
          onClick={(event) => this.handler(event.target)}
        />
        <label htmlFor="sort">DESC</label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => sortFilter(sort, column)}
        >
          Sort
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.filters.options,
  data: state.swAPI.data,
});

const mapDispatchToProps = (dispatch) => ({
  sortFilter: (data, column) => dispatch(sortFilter(data, column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
