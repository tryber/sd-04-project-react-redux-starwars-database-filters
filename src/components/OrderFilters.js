import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortFilters } from '../actions';

class OrderFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'name',
      sort: 'ASC',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { column, sort } = this.state;
    const { submitFilters } = this.props;
    submitFilters(column, sort);
  }

  renderRadioButtons() {
    return (
      <div onChange={(e) => this.handleChange(e.target)} name="sort">
        <input
          data-testid="column-sort-input"
          id="ASC"
          name="sort"
          type="radio"
          value="ASC"
          defaultChecked
        />
        <label htmlFor="ASC">ASC</label>
        <input data-testid="column-sort-input" id="DESC" name="sort" type="radio" value="DESC" />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }

  render() {
    const { keys } = this.props;
    return (
      <div>
        <select
          onChange={(e) => this.handleChange(e.target)}
          data-testid="column-sort"
          name="column"
        >
          {keys.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        {this.renderRadioButtons()}
        <button
          onClick={(e) => this.handleSubmit(e)}
          data-testid="column-sort-button"
          type="submit"
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitFilters: (column, sort) => dispatch(sortFilters(column, sort)),
});

OrderFilters.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitFilters: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(OrderFilters);
