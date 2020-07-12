import React from 'react';
import Table from './Table';
import { connect } from 'react-redux';
import { swFetch } from '../action';

class Home extends React.Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Table/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(swFetch()),
});

export default connect(null, mapDispatchToProps)(Home);