import React from 'react';
import getPlanets from '../services/api';

export default class Table extends React.Component {
  async fetchPlanets() {
    try {
      const planets = await getPlanets();
      return planets;
    }
    catch (error) {
      throw error.message;
    }
  }

  render() {
    const planets = this.fetchPlanets();
    console.log(planets);

    return (
      <table>
        {planets.forEach(planet =>
          Object.keys(planet).map(key => <th>{key}</th>))}
        <th></th>
      </table>
    );
  }
}