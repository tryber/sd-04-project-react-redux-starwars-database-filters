import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName, filterByNumVal } from '../actions';

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
      <>
        <label htmlFor="comparison-filter">Comparação:</label>
        <select
          id="comparison-filter"
          name="comparison"
          data-testid="comparison-filter"
          onChange={event => this.handleChange(event)}
          value={comparison}
        >
          <option value="" />
          <option value="maior que">Maior Que</option>
          <option value="menor que">Menor Que</option>
          <option value="igual a">Igual A</option>
        </select>
      </>
    );
  }

  renderColumnSelect = () => {
    const { numFilters } = this.props;
    const { column } = this.state;
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const stateColumns = numFilters.map(({ column }) => column);
    const filteredColumns = [
      '',
      ...columns.filter(option => !stateColumns.includes(option)),
    ];
    return (
      <>
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
      </>
    );
  }

  render() {
    const { planetName, filterByName } = this.props;
    const { value } = this.state;
    return (
      <>
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
        </div>
      </>
    );
  }
}

TableHeader.propTypes = {
  filterByName: PropTypes.func,
  filterByNumVal: PropTypes.func,
  planetName: PropTypes.string,
};

// const mapDispatchToProps = dispatch => ({
//   nameFilter: event => dispatch(filterByName(event)),
// });

const mapStateToProps = state => ({
  planetName: state.allFilters.filters.filterByName.name,
  numFilters: state.allFilters.filters.filterByNumericValues,
});

export default connect(mapStateToProps, { filterByName, filterByNumVal })(TableHeader);
