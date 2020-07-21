import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../action';
// import planetsData from '../services/API';

class Table extends React.Component {
/*  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  } */

  componentDidMount() {
    /* planetsData()
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.results,
        });
      }); */
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { items, isLoaded } = this.props;
    console.log(items)
    if (!isLoaded) {
      return <p>Loading</p>;
    }
    return (
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <p>Name: {item.name}</p>
            <p>Rotation Period: {item.rotation_period}</p>
            <p>Orbital Period: {item.orbital_period}</p>
            <p>Diameter: {item.diameter}</p>
            <p>Climate: {item.climate}</p>
            <p>Gravity: {item.gravity}</p>
            <p>Terrain: {item.terrain}</p>
            <p>Surface Water: {item.surface_water}</p>
            <p>Population: {item.population}</p>
          </li>
        ))}
      </ul>
    );
  }
}

const mapleStateToProps = (state) => ({
  isLoaded: state.reducer.isLoaded,
  items: state.reducer.items,
});

const mapleDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchAPI()),
});

export default connect(mapleStateToProps, mapleDispatchToProps)(Table);
