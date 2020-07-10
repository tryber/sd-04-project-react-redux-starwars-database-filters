import React from 'react';
import fetchRequestApi from './actions/getApi';
import { connect } from 'react-redux';
import './App.css';
import Table from './components/Table';

class App extends React.Component {
  componentDidMount() {
    console.log('montou!');
    const { getRequestFromApi } = this.props;
    getRequestFromApi();
  }

  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRequestFromApi: () => dispatch(fetchRequestApi()),
});

export default connect(null, mapDispatchToProps)(App);
