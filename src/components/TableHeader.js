import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

export class TableHeader extends Component {
  render() {
    const { planetName, nameFilter } = this.props;
    return (
      <>
        <h1>StarWars Datatable Filters</h1>
        <input
          type="text"
          value={planetName}
          data-testid="name-filter"
          onChange={e => nameFilter(e.target.value)}
        />
      </>
    );
  }
}

TableHeader.propTypes = {
  nameFilter: PropTypes.func,
  planetName: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  nameFilter: event => dispatch(filterByName(event)),
});

const mapStateToProps = state => ({
  planetName: state.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
