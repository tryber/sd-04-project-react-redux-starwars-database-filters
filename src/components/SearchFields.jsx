import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { filterByName } from '../actions/filters';

class SearchFields extends Component {
  render() {
    const { filterName: filter, filterByNameValue } = this.props;
    console.log(filterByNameValue);
    return (
      <form>
        <input
          onChange={(e) => filter(e.target.value)}
          value={filterByNameValue}
          placeholder="Digite o que você procura?"
          data-testid="name-filter"
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNameValue: state.filterPlanets.filters.filterByName,
});

const mapDispatchToProps = (dispatch) => ({
  filterName: (e) => dispatch(filterByName(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFields);

SearchFields.propTypes = {
  filterName: PropTypes.func.isRequired,
  filterByNameValue: PropTypes.arrayOf(PropTypes.object).isRequired,
};
