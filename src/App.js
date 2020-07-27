import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';
import { planetsResponseApi } from './actions';

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

App.propTypes = {
  getSwapi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getSwapi: () => dispatch(planetsResponseApi()),
});

export default connect(null, mapDispatchToProps)(App);
