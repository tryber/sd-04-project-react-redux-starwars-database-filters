import React, { Component } from 'react';
import Filter from './Filter';
// import Compare from './Compare';
import Table from './Table';

class Home extends Component {
  render() {
    return (
      <div>
        <Filter />
        {/* <Compare /> */}
        <Table />
      </div>
    );
  }
}

export default Home;
