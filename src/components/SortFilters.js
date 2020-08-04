import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortFilters } from '../actions/filterPlanetByName';

class SortFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'name',
      sort: 'ASC',
    };

    this.getFilterInfo = this.getFilterInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getFilterInfo(e) {
    const { column, sort } = this.state;
    const { dispatchSortFilters } = this.props;
    dispatchSortFilters(column, sort);
  }

  handleChange(e) {
    const { name, value } = e;
    this.setState({ [name]: value });
  }

  renderOptions() {
    return (
      <form onChange={(e) => this.handleChange(e.target)} name="sort">
        <label htmlFor="ASC">ASC</label>
        <input
          data-testid="column-sort-input"
          id="ASC"
          name="sort"
          type="radio"
          value="ASC"
          defaultChecked
        />
        <label htmlFor="DESC">DESC</label>
        <input
          data-testid="column-sort-input"
          id="DESC"
          name="sort"
          type="radio"
          value="DESC"
        />
      </form>
    );
  }

  render() {
    const { headers } = this.props;
    return (
      <div>
        <select
          data-testid="column-sort"
          name="column"
          onChange={(e) => this.handleChange(e.target)}
        >
          {headers.map((header) => (
            <option key={header} value={header}>
              {header}
            </option>
          ))}
        </select>
        <div>
          {this.renderOptions()}
          <button
            data-testid="column-sort-button"
            type="submit"
            onClick={(e) => this.getFilterInfo(e)}
          >
            Filtrar
          </button>
        </div>
      </div>
    );
  }
}

SortFilters.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchSortFilters: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSortFilters: (column, sort) => dispatch(sortFilters(column, sort)),
});

export default connect(null, mapDispatchToProps)(SortFilters);
