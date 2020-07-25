import React, { Component } from 'react';
import { connect } from 'react-redux';
import searchPlanet from '../actions/searchAction';

class SearchPlanet extends Component {
  render() {
    const { searchPlanet, planets } = this.props;
    return (
      <div>
        <label htmlFor='filter'>Procurar</label>
        <input data-testid='name-filter' onChange={(e) => searchPlanet(e.target.value)} value={planets} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  planets: state.searchReducer.planets,
});

const mapDispatchToProps = (dispatch) => ({
  search: (value) => dispatch(searchPlanet(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanet);
