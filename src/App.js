import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import fetchApiRequisition from './actions';
import Header from './components/Header';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  componentDidMount() {
    this.props.api();
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
          <SearchBar />
        </div>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  api: () => dispatch(fetchApiRequisition()),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  api: PropTypes.func.isRequired,
};
