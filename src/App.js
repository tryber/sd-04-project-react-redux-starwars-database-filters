import React from 'react';
import { connect } from 'react-redux';
import { fetchSWPlanets } from './actions';
import './App.css';
import Table from './components/Table';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
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

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchSWPlanets()),
});

export default connect(null, mapDispatchToProps)(App);
