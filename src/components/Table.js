import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { planetsInfoRequest } from '../actions';

class Table extends Component {
  componentDidMount() {
    const { starWarsAPI } = this.props;
    starWarsAPI();
  }

  render() {
    const { data, isFetching } = this.props;
    let headers = '';
    if (isFetching) {
      return <div>Loading...</div>;
    }
    headers = Object.keys(data[0]).filter((key) => key !== 'residents');
    return (
      <div>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={planet.name}>
                {headers.map((desc) => (
                  <td key={desc}>{planet[desc]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetTableReducer.data,
  isFetching: state.planetTableReducer.isFetching,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
