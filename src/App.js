import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from './actions';
import Table from './components/Table';

class App extends React.Component {
  componentDidMount() {
    const { dispatchFetchPlanets } = this.props;
    dispatchFetchPlanets();
  }

  render() {
    return (
      <div>
        <header>
          <Table />
        </header>
      </div>
    );
  }
}

App.propTypes = {
  dispatchFetchPlanets: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(null, mapDispatchToProps)(App);
