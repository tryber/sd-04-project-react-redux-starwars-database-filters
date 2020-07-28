import React, { Component } from 'react';
import getPlanetsAPI from '../services/getPlanetsAPI';

getPlanetsAPI().then((data) => console.log(data.results));

export class Home extends Component {
  render() {
    return <div>Teste</div>;
  }
}

export default Home;
