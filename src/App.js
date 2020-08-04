import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import { fetchPlanets } from './actions';
import Filter from './components/Filter';
import FiltersPanel from './components/FiltersPanel';
import SortFilters from './components/SortFilters';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <header>
          <SearchBar />
          <Filter />
          <FiltersPanel />
          <SortFilters headers={data.length > 0 ? Object.keys(data[0]) : []} />
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
  data: PropTypes.arrayOf(object).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
