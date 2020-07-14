import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import './App.css';
import Table from './components/table/Table';
import requestFetch from './actions';


class App extends Component {
	componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }
	render() {
    return (
      <div className="App">
				<Table />
      </div>
  	);
	}
}

App.propTypes = {
  getApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(requestFetch())
});

export default connect(null, mapDispatchToProps)(App);
