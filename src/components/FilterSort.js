import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortFilter } from '../action/actionFilter';

class FilterSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
    this.getState = this.getState.bind(this);
  }

  getState({ name, value }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { btnSort } = this.props;
    const { column, sort } = this.state;

    const options = [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'films',
      'created',
      'edited',
      'url',
    ];

    return (
      <div>
        <select
          name="column"
          data-testid="column-sort"
          onChange={(event) => this.getState(event.target)}
        >
          <option>Ordem</option>
          {options.map((opt) => (
            <option>{opt}</option>
          ))}
        </select>
        <div>
          <label htmlFor="orderASC">
            <input
              type="radio"
              name="sort"
              value="ASC"
              id="orderASC"
              test="column-sort-input"
              onClick={(event) => this.getState(event.target)}
            />
            ASC
          </label>
          <label htmlFor="orderDSC">
            <input
              type="radio"
              value="DESC"
              name="sort"
              id="orderDSC"
              test="column-sort-input"
              onClick={(event) => this.getState(event.target)}
            />
            DSC
          </label>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={() => btnSort(column, sort)}
          >
            Filter
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  column: state.filters.order,
  sort: state.filters.order,
});

const mapDispatchToProps = (dispatch) => ({
  btnSort: (column, sort) => dispatch(sortFilter(column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);
