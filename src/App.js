import React from 'react';
import { connect } from 'react-redux';

import Table from './components/Table';
import { fetchApi } from './actions/index';

class App extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
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

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchApi()),
});

export default connect(null, mapDispatchToProps)(App);
