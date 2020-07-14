import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './components/Table';
import Home from './components/Home';
import { swFetch } from './actions';

class App extends React.Component {
  componentDidMount() {
    const { getSwFetch } = this.props;
    getSwFetch();
  }

  render() {
    return (
      <div>
        <Home />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getSwFetch: swFetch,
};

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  getSwFetch: PropTypes.func.isRequired,
};
