import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import linha from './TableBody';

class Table extends React.Component {
  render() {
    const { data, isLoading, filterByName } = this.props;
    if (isLoading) return <span>Loading...</span>;
    const planetas = data[0];
    const objPlanetas = Object.keys(planetas).filter((item) => item !== 'residents');
    const filtrado = data.filter(elem => elem.name.includes(filterByName))
    return (
      <table>
        <thead>
          <tr>
            {objPlanetas.map((planet) => (
              <th>{planet}</th>
            ))}
          </tr>
        </thead>
        <tbody>{filtrado.map((item) => linha(item))}</tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  isLoading: state.reducer.isLoading,
  filterByName: state.filters.filterByName.name,
});

export default connect(mapStateToProps)(Table);
