import React, { Component } from 'react';
import getPlanetsAPI from '../services/getPlanetsAPI';
import Table from './Table';

getPlanetsAPI().then((data) => console.log(data.results));

export class Home extends Component {
  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

export default Home;
