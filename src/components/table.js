import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../action';

class Table extends React.Component {
  componentDidMount() {
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
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Orbital Period</th><th>Diameter</th>
            <th>Climate</th><th>Gravity</th><th>Terrain</th>
            <th>Surface Water</th><th>Population</th>
          </tr>
        </thead>
        {items.map((item) => (
          <tbody key={item.name}>
            <tr>
              <td>{item.name}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.reducer.isLoaded,
  items: state.reducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
