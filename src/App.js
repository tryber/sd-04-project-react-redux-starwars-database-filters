import React, { Component } from 'react';
import { connect } from 'react-redux';
import planetsFetchData from './middlewares/PlanetsThunk';

export class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    return (
      <div>
        <p>teste</p>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(planetsFetchData(url)),
  };
};

export default connect(null, mapDispatchToProps)(App);
