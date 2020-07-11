import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/App.css';
import { getAPI, filterByName, filterButton } from '../actions';

const INITIAL_STATE = {
  column: '',
  comparison: '',
  value: '',
};

class FilterNav extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  saveState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState(INITIAL_STATE);
  }

  render() {
    const { getAPIProps, filterValues, filterNumber } = this.props;
    const { column, comparison, value } = this.state;
    return (
      <nav>
        <input
          data-testid="name-filter"
          onChange={(e) => filterValues(e.target.value)}
        />
        <div>
          <select
            name="column"
            onChange={(e) => this.saveState(e.target.name, e.target.value)}
            value={column}
            data-testid="column-filter"
          >
            <option aria-label="empty" />
            <option value="population">population</option>
            <option value="rotation_period">rotation_period</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="surface_water">surface_water</option>
          </select>

          <select
            name="comparison"
            onChange={(e) => this.saveState(e.target.name, e.target.value)}
            value={comparison}
            data-testid="comparison-filter"
          >
            <option aria-label="empty" />
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
          <input
            name="value"
            value={value}
            onChange={(e) => this.saveState(e.target.name, e.target.value)}
            type="number"
            data-testid="value-filter"
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={() => {
              filterNumber(column, comparison, value);
              this.resetState();
            }}
          >
            FILTER!
          </button>
        </div>
        <button type="button" onClick={() => getAPIProps()}>
          FIND PLANETS!
        </button>
      </nav>
    );
  }
}

const mapDispatch = {
  getAPIProps: getAPI,
  filterValues: filterByName,
  filterNumber: filterButton,
};

export default connect(null, mapDispatch)(FilterNav);

FilterNav.propTypes = {
  getAPIProps: PropTypes.func.isRequired,
  filterValues: PropTypes.func.isRequired,
  filterNumber: PropTypes.func.isRequired,
};
