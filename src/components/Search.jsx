import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanets } from '../actions';

class Search extends Component {
  componentDidMount() {
    this.props.planets();
  }

  render() {
    return (
      <div>
        <input data-testid="name-filter" type="text" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  planets: (endpoint) => dispatch(getPlanets(endpoint)),
});

export default connect(null, mapDispatchToProps)(Search);
