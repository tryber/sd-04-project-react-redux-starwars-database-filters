import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search, numericFilter } from '../actions/filters';

class FiltersPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  render() {
    const { searchName, filterByNumber } = this.props;
    const { column, comparison, value } = this.state;
    return (
      <div>
        <label htmlFor="search">
          Search
          <input
            type="text"
            name="search"
            id="search"
            data-testid="name-filter"
            onChange={(event) => searchName(event.target.value)}
          />
        </label>
        <form>
          <p>Filter by numbers</p>
          <select
            name="column-filter"
            id="column-filter"
            data-testid="column-filter"
            value={column}
            onChange={(event) => this.setState({ column: event.target.value })}
          >
            <option value="">Column</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select
            name="comparison-filter"
            id="comparison-filter"
            value={comparison}
            data-testid="comparison-filter"
            onChange={(event) =>
              this.setState({ comparison: event.target.value })
            }
          >
            <option value="" disabled>
              Comparison
            </option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            placeholder="Number"
            min="0"
            data-testid="value-filter"
            value={value}
            onChange={(event) => this.setState({ value: event.target.value })}
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={() => {
              let stateObject = {};
              if (column && comparison && value) {
                stateObject = filterByNumber(this.state);
              }
              return stateObject;
            }}
          >
            Filter
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchName: (name) => dispatch(search(name)),
  filterByNumber: (value) => dispatch(numericFilter(value)),
});

FiltersPanel.propTypes = {
  searchName: PropTypes.func.isRequired,
  filterByNumber: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FiltersPanel);
