import React from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';
import { connect } from 'react-redux';
import { planetsResponseApi } from './Actions';

class App extends React.Component {
  componentDidMount() {
    const { getSwapi } = this.props;
    getSwapi();
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSwapi: () => dispatch(planetsResponseApi()),
});

export default connect(null, mapDispatchToProps)(App);
