import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteFilter } from '../actions';
import TextFilter from './searchBarComponents/TextFilter';
import NumericFilter from './searchBarComponents/NumericFilter';

class SearchBar extends Component {
  render() {
    const filters = this.props.filterByNumericValues;

    return (
      <div>
        <TextFilter />
        <NumericFilter />
        <div>
          <h1>Filtros:</h1>
          <div>
            {filters.map((filter) => (
              <div>
                <p key={filter.value}>
                  {filter.column} {filter.comparison} {filter.value}
                </p>
                <button type="button" onClick={() => this.props.deleteFilter(filter.column)}
                  data-testid='filter'>
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFilter: (obj) => dispatch(deleteFilter(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  deleteFilter: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
