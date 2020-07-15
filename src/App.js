import React from 'react';
import { connect } from 'react-redux';

import { getSWAPI } from './actions';
import Table from './components/Table/index';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPlanets: () => dispatch(getSWAPI()),
});

export default connect(null, mapDispatchToProps)(App);
