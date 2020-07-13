import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Table from './components/Table';
import { fetchApi } from './actions/index';

class App extends React.Component {
  componentDidMount() {
    const { fetchApi1 } = this.props;
    fetchApi1();
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

App.propTypes = {
  fetchApi1: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  fetchApi1: () => dispatch(fetchApi()),
});

export default connect(null, mapDispatchToProps)(App);
