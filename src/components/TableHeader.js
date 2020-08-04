import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName, filterByNumVal, removeNumFilter } from '../actions';

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
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
          <option aria-label="None" value="" />
          <option value="maior que">Maior Que</option>
          <option value="menor que">Menor Que</option>
          <option value="igual a">Igual A</option>
        </select>
      </React.Fragment>
    );
  };

  renderColumnSelect = () => {
    const { currentFilters } = this.props;
    const { column } = this.state;
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const stateColumns = currentFilters.map(({ column }) => column);
    const filteredColumns = [
      '',
      ...columns.filter(option => !stateColumns.includes(option)),
    ];
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
        <form action="" onSubmit={event => this.handleSumbit(event)}>
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
          <input
            type="submit"
            value="Filtrar"
            data-testid="button-filter"
          />
        </form>
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
};

// const mapDispatchToProps = dispatch => ({
//   nameFilter: event => dispatch(filterByName(event)),
// });

const mapStateToProps = state => ({
  planetName: state.allFilters.filters.filterByName.name,
  currentFilters: state.allFilters.filters.filterByNumericValues,
});

export default connect(mapStateToProps, {
  filterByName,
  filterByNumVal,
  removeNumFilter,
})(TableHeader);
