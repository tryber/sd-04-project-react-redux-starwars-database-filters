import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Table from './components/TableScreen/Table';
import FilterBar from './components/FilterBar/FilterBar';
import MyFooter from './components/MyFooter';
import requestFetch from './actions';

class App extends Component {
  componentDidMount() {
    const { callAPI } = this.props;
    callAPI();
  }
  render() {
    return (
      <div className="App">
        <FilterBar />
        <Table />
        <MyFooter />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  callAPI: () => dispatch(requestFetch()),
});

export default connect(null, mapDispatchToProps)(App);
