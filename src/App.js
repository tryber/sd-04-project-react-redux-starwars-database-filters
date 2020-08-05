import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './components/Filter';
import Table from './components/Table';
import { requestFetch } from './action';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <Filter />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = ({
  planetReducer: { loading },
}) => ({
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
