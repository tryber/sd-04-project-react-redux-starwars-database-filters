import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/App.css';
import Table from './components/Table';
import Header from './components/Header';
import { getAPI } from './actions';

class App extends React.Component {
  componentDidMount() {
    const { getAPIProps } = this.props;
    getAPIProps();
  }

  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

const mapDispatch = {
  getAPIProps: getAPI,
};

export default connect(null, mapDispatch)(App);

App.propTypes = {
  getAPIProps: PropTypes.func.isRequired,
};
