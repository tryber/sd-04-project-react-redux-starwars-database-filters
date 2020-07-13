import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortFilter } from '../actions/index';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
    this.handler = this.handler.bind(this);
    this.generateInputAndLabel = this.generateInputAndLabel.bind(this);
  }

  handler({ name, value }) {
    this.setState({ [name]: value });
  }

  generateInputAndLabel(value) {
    return (
      <div>
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value={value}
          onClick={(event) => this.handler(event.target)}
        />
        <label htmlFor="sort">{value}</label>
      </div>
    );
  }

  render() {
    const { options, sortFilterFunc } = this.props;
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
        {this.generateInputAndLabel('ASC')}
        {this.generateInputAndLabel('DESC')}
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => sortFilterFunc(sort, column)}
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
  sortFilterFunc: (data, column) => dispatch(sortFilter(data, column)),
});

Sort.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortFilterFunc: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
