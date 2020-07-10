import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import fetchRequestApi from './actions/getApi';
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

App.propTypes = {
  getRequestFromApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getRequestFromApi: () => dispatch(fetchRequestApi()),
});

export default connect(null, mapDispatchToProps)(App);
