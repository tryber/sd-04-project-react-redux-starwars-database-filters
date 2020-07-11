import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/App.css';
import Table from './components/Table';
import Header from './components/Header';
import { getAPI, recapCategories } from './actions';

class App extends React.Component {
  componentDidMount() {
    const { getAPIProps, recapingCategories } = this.props;
    getAPIProps();
    recapingCategories();
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
  recapingCategories: recapCategories,
};

export default connect(null, mapDispatch)(App);

App.propTypes = {
  getAPIProps: PropTypes.func.isRequired,
  recapingCategories: PropTypes.func.isRequired,
};
