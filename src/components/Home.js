import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';

class Home extends Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div>
        <h2>StarWars DataTable</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
