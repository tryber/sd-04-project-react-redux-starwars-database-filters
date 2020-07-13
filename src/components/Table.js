import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { planetsInfoRequest } from '../actions';

const renderTHead = (headers) => (
  <thead>
    <tr>
      {headers.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  </thead>
);

const renderTBody = (headers, data) => (
  <tbody>
    {data.map((planet) => (
      <tr key={planet.name}>
        {headers.map((desc) => (
          <td key={desc}>{planet[desc]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

const renderTable = (headers, data) => (
  <table>
    {renderTHead(headers)}
    {renderTBody(headers, data)}
  </table>
);

class Table extends Component {
  componentDidMount() {
    const { starWarsAPI } = this.props;
    starWarsAPI();
  }

  render() {
    const { data, isFetching, searchTerm } = this.props;
    let headers = '';
    let filtereds = '';
    if (isFetching) {
      return <div>Loading...</div>;
    }
    headers = Object.keys(data[0]).filter((key) => key !== 'residents');
    if (searchTerm) {
      filtereds = data.filter((planet) => planet.name.includes(searchTerm));
      return <div>{renderTable(headers, filtereds)}</div>;
    }
    return <div>{renderTable(headers, data)}</div>;
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  isFetching: state.isFetching,
  searchTerm: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  starWarsAPI: () => dispatch(planetsInfoRequest()),
});

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
      films: PropTypes.arrayOf(PropTypes.string),
      created: PropTypes.string,
    }),
  ).isRequired,
  starWarsAPI: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
