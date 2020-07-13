import React from 'react';
import { connect } from 'react-redux';
import linha from './TableBody';

class Table extends React.Component {
  render() {
    const { data, isLoading } = this.props;
    if (isLoading) return <span>Loading...</span>;
    // console.log(data);
    const planetas = data[0];
    // console.log(planetas);
    const objPlanetas = Object.keys(planetas).filter((item) => item !== 'residents');
    console.log(objPlanetas);

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
