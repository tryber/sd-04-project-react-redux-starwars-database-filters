import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class TableHeader extends Component {
  handleSumbit = event => {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    const { planetName, filterByName } = this.props;
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
                <label htmlFor="column-filter">Coluna:</label>
                <select name="column-filter" data-testid="column-filter">
                  <option value="population">Population</option>
                  <option value="orbital_period">Orbital Period</option>
                  <option value="diameter">Diameter</option>
                  <option value="rotation_period">Rotation Period</option>
                  <option value="surface_water">Surface Water</option>
                </select>
                <label htmlFor="comparison-filter">Comparação:</label>
                <select name="comparison-filter" data-testid="comparison-filter">
                  <option value="maior que">Maior Que</option>
                  <option value="menor que">Menor Que</option>
                  <option value="igual a">Igual A</option>
                </select>
              </div>
              <input
                type="number"
                data-testid="value-filter"
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
  planetName: PropTypes.string,
};

// const mapDispatchToProps = dispatch => ({
//   nameFilter: event => dispatch(filterByName(event)),
// });

const mapStateToProps = state => ({
  planetName: state.filters.filterByName.name,
});

export default connect(mapStateToProps, { filterByName })(TableHeader);
