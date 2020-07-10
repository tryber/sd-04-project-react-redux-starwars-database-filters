import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import fetchApiRequisition from './actions';
import Header from './components/Header';
import Table from './components/Table';

class App extends React.Component {
  componentDidMount() {
    this.props.api();
  }

  render() {
    return (
      <div className="App">
        <Header />
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
