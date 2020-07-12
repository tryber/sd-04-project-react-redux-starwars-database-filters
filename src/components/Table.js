import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions/actionAPI';

class Table extends React.Component {
  componentDidMount() {
    const { fetchingApi } = this.props;

    fetchingApi();
  }

  render() {
    const {
      isFetching, data, filteredData, term,
    } = this.props;
    if (isFetching) return <div>Loading</div>;
    const planets = term !== '' ? filteredData : data;
    const titles = planets[0] ? Object.keys(planets[0]) : [];
    return (
      <table>
        <thead>
          <tr>
            {titles
              .filter((title) => title !== 'residents')
              .map((title) => (
                <th key={title}>{title.toUpperCase()}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet)
                .filter((_, index) => index !== 9)
                .map((value) => (
                  <td key={value}>{value}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  filteredData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  isFetching: PropTypes.bool.isRequired,
  fetchingApi: PropTypes.func.isRequired,
  term: PropTypes.string,
};

Table.defaultProps = {
  data: [],
  filteredData: [],
  term: '',
};

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
  data: state.planetReducer.data,
  term: state.filters.filterByName.name,
  filteredData: state.filters.filteredData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
