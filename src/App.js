import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import Header from './components/Header';
import { requestFetchApi } from './actions/actionFetch';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
    console.log('montou');
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetchApi()),
});

export default connect(null, mapDispatchToProps)(App);
