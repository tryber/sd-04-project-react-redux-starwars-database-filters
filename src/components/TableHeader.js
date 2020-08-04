import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  filterByName, filterByNumVal, removeNumFilter, sortData,
} from '../actions';

const columns = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
      columnSort: '',
      sort: '',
    };
  }

  handleSumbit = event => {
    event.preventDefault();
    const { filterByNumVal } = this.props;
    const { column, comparison, value } = this.state;
    filterByNumVal(column, comparison, value);
    this.setState({
      column: '',
      comparison: '',
      value: 0,
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  renderCompSelect = () => {
    const { comparison } = this.state;
    return (
      <React.Fragment>
        <label htmlFor="comparison-filter">Comparação:</label>
        <select
          id="comparison-filter"
          name="comparison"
          data-testid="comparison-filter"
          onChange={event => this.handleChange(event)}
          value={comparison}
        >
          <option value="">-</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </React.Fragment>
    );
  };

  renderColumnSelect = () => {
    const { currentFilters } = this.props;
    const { column } = this.state;
    const stateColumns = currentFilters.map(({ column }) => column);
    const filteredColumns = columns.filter(option => !stateColumns.includes(option));
    return (
      <React.Fragment>
        <label htmlFor="column-filter">Coluna:</label>
        <select
          id="column-filter"
          name="column"
          data-testid="column-filter"
          onChange={event => this.handleChange(event)}
          value={column}
        >
          {filteredColumns.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  };

  renderRemoveBtn = () => {
    const { currentFilters, removeNumFilter } = this.props;
    return currentFilters.map(({ column, comparison, value }) => (
      <div data-testid="filter" key={column}>
        <span>{`${column} - ${comparison} - ${value} `}</span>
        <button type="button" name={column} onClick={e => removeNumFilter(e.target.name)}>
          X
        </button>
      </div>
    ));
  };

  renderForm = () => {
    const { value } = this.state;
    return (
      <div className="container small">
        <form action="">
          <div className="item">
            {this.renderColumnSelect()}
            {this.renderCompSelect()}
          </div>
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            value={value}
            onChange={event => this.handleChange(event)}
          />
          <button
            type="button"
            value="Filtrar"
            data-testid="button-filter"
            onClick={event => this.handleSumbit(event)}
          >
            Filter
          </button>
        </form>
      </div>
    );
  }

  renderSort = () => {
    const { sortData } = this.props;
    const { columnSort, sort } = this.state;
    return (
      <div>
        <select
          data-testid="column-sort"
          name="columnSort"
          onChange={event => this.handleChange(event)}
        >
          {columns.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <label htmlFor="sort">ASC</label>
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value="ASC"
          onClick={event => this.handleChange(event)}
        />
        <label htmlFor="sort">DESC</label>
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value="DESC"
          onClick={event => this.handleChange(event)}
        />
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => sortData(sort, columnSort)}
        >
          Sort
        </button>
      </div>
    );
  }

  render() {
    const { planetName, filterByName } = this.props;
    return (
      <React.Fragment>
        <h1>StarWars Datatable Filters</h1>
        <div className="container">
          <div className="item">
            <input
              type="text"
              value={planetName}
              data-testid="name-filter"
              onChange={event => filterByName(event.target.value)}
            />
          </div>
          {this.renderSort()}
          {this.renderForm()}
          <div className="container-small">
            {this.renderRemoveBtn()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

TableHeader.propTypes = {
  filterByName: PropTypes.func,
  filterByNumVal: PropTypes.func,
  currentFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  planetName: PropTypes.string,
  removeNumFilter: PropTypes.func,
  sortData: PropTypes.func,
};

// const mapDispatchToProps = dispatch => ({
//   nameFilter: event => dispatch(filterByName(event)),
// });

const mapStateToProps = state => ({
  planetName: state.filters.filterByName.name,
  currentFilters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, {
  filterByName,
  filterByNumVal,
  removeNumFilter,
  sortData,
})(TableHeader);
