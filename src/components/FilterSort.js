import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlanetsOptions from './PlantesOptions.js';
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
    this.setState({ [name]: value });
  }

  render() {
    const { btnSort } = this.props;
    const { column, sort } = this.state;

    return (
      <div>
        <PlanetsOptions
          onChange={(event) => this.getState(event.target)}         
        />
        <label htmlFor="orderASC">
          <input
            type="radio"
            name="sort"
            value="ASC"
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
            test="column-sort-input"
            onClick={(event) => this.getState(event.target)}
          />
          DSC"
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={() => btnSort(column, sort)}
        >
          Filter
        </button>
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

FilterSort.propTypes = {
  btnSort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);
