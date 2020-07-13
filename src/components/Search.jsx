import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlanets, changeSearch } from '../actions';

class Search extends Component {
  componentDidMount() {
    this.props.planets();
  }

  render() {
    const { search, name } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          value={name}
          onChange={(e) => search(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  planets: (endpoint) => dispatch(getPlanets(endpoint)),
  search: (planetName) => dispatch(changeSearch(planetName)),
});

Search.propTypes = {
  planets: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
