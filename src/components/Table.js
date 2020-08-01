import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGetPlanet } from '../actions';
// import Filter from './Filter';

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { planets, name } = this.props;
    const filterPlanet = planets.filter((planet) => planet.name.includes(name));
    const attributes = planets[0]
      ? Object.keys(planets[0]).filter((attribute) => attribute !== 'residents')
      : [];
    return (
      <div>
        <span>StarWars Datatable with Filters</span>
        {/* <Filter /> */}
        <thead>
          <tr>
            {attributes.map((index) => (
              <th key={index}>{index}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterPlanet.map((planet, index) => (
            <tr key={index}>
              {attributes.map((prop, index) => (
                <td key={index}>{planet[prop]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.reducer.data,
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchGetPlanet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchGetPlanet } from '../actions';
// import Filter from './Filter';

// class Table extends Component {
//   componentDidMount() {
//     const { getPlanets } = this.props;
//     console.log(this.props);
//     getPlanets();
//     console.log(`getPlanets: ${getPlanets()}`);
//   }

//   render() {
//     const { planets, name } = this.props;
//     console.log(planets);
//     return <div>Olá Mundo</div>;
//     const attributes = planets[0]
//       ? Object.keys(planets[0]).filter((attribute) => attribute !== 'residents')
//       : [];
//     const filterPlanet = planets.filter((planet) => planet.name.includes(name));
//     console.log(filterPlanet);
//     return (
//       <div>
//         <span>StarWars Datatable with Filters</span>
//         <Filter />
//         <thead>
//           <tr>
//             {attributes.map((index) => (
//               <th key={index}>{index}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {planets.map((planet, index) => (
//             <tr key={index}>
//               {attributes.map((prop, index) => (
//                 <td key={index}>{planet[prop]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   planets: state.planets.data,
//   name: state.filters.filterByName.name,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getPlanets: () => dispatch(fetchGetPlanet()),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Table);
