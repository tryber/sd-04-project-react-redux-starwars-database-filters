import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSwPlanets } from './actions';
import './App.css';

import Table from './components/Table';

class App extends React.Component {
  componentDidMount() {
    const { fetchSwPlanets } = this.props;
    fetchSwPlanets();
  }

  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSwPlanets: () => dispatch(getSwPlanets()),
});

// const mapStateToProps = (state) => ({
//   isLoading: state.reducer.isLoading,
// });

App.propTypes = {
  fetchSwPlanets: PropTypes.func.isRequired,
  // isLoading: PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
