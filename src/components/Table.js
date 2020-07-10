import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets from '../actions/fetchPlanets';

function renderTable(tableTitles, filterPlanets) {
  return (
    <table>
      <thead>
        <tr>
          {tableTitles
            .filter((title) => title !== 'residents')
            .map((title) => (
              <th key={title}>{title}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {filterPlanets.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet)
              .filter((_, index) => index !== 9)
              .map((item) => (
                <td key={item}>{item}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const {
      data,
      isFetching,
      filteredData,
      inputName,
    } = this.props;
    if (isFetching) return <p>Loading...</p>;
    const filterPlanets = inputName === '' ? data : filteredData;
    const tableTitles = data[0] ? Object.keys(data[0]) : [];
    return renderTable(tableTitles, filterPlanets);
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
  filteredData: state.filters.filteredData,
  inputName: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  getPlanets: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
