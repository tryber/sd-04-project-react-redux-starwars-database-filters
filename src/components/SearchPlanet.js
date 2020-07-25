import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import searchPlanet from '../actions/searchAction';

class SearchPlanet extends Component {
  render() {
    const { search } = this.props;
    return (
      <div>
        <label htmlFor="filter">Procurar</label>
        <input
          data-testid="name-filter"
          onChange={(e) => search(e.target.value)}
        />
      </div>
    );
  }
}

SearchPlanet.propTypes = {
  search: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  planets: state.searchReducer.planets,
});

const mapDispatchToProps = (dispatch) => ({
  search: (value) => dispatch(searchPlanet(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanet);
