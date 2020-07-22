import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import { fetchPlanets } from './actions';
import Filter from './components/Filter';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div>
        <header>
          <SearchBar />
          <Filter />
        </header>
        <section>
          <Table />
        </section>
      </div>
    );
  }
}

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(null, mapDispatchToProps)(App);
