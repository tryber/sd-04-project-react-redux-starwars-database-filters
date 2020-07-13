import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { data, isLoading } = this.props;
    if (isLoading) return <span>Loading...</span>;
    // console.log(data);
    const planetas = data[0];
    // console.log(planetas);
    const objPlanetas = Object.keys(planetas).filter((item) => item !== 'residents');
    console.log(objPlanetas);
    const linha = (item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.rotation_period}</td>
          <td>{item.orbital_period}</td>
          <td>{item.diameter}</td>
          <td>{item.climate}</td>
          <td>{item.gravity}</td>
          <td>{item.terrain}</td>
          <td>{item.surface_water}</td>
          <td>{item.population}</td>
          <td>{item.films}</td>
          <td>{item.created}</td>
          <td>{item.edited}</td>
          <td>{item.url}</td>
        </tr>
      );
    };
    
    return (
      <table>
        <thead>
          <tr>
            {objPlanetas.map((planet) => (
              <th>{planet}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => linha(item))}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  isLoading: state.reducer.isLoading,
});

export default connect(mapStateToProps)(Table);
