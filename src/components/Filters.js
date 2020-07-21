import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterCombiner } from '../action/actionFilter';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colunmFilter: '',
      comparFilter: '',
      numberFilter: '',
    };
  }

  getState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  firstFilter() {
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={(e) => this.getState('colunmFilter', e.target.value)}
        >
          <option value="">Coluna</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </div>
    );
  }

  SecondFilter() {
    const { btnInput } = this.props;
    const { colunmFilter, comparFilter, numberFilter } = this.state;
    return (
      <div>
        <select
          data-testid="comparison-filter"
          onChange={(e) => this.getState('comparFilter', e.target.value)}
        >
          <option value="">Comparação</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(e) => this.getState('numberFilter', e.target.value)}
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => btnInput(colunmFilter, comparFilter, numberFilter)}
        >
          Filtrar
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.firstFilter()}
        {this.SecondFilter()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  btnInput: (column, compar, number) =>
    dispatch(filterCombiner(column, compar, number)),
});

Filters.protoTypes = {
  btnInput: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Filters);

