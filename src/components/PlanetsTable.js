import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import PlanetItem from './PlanetItem';

class PlanetsTable extends Component {
  componentDidMount() {
    this.props.fetchData('planets');
  }

  render() {
    const { data } = this.props;
    if (data) return <div>loading...</div>
    const keys = Object.keys(data[0]).filter((k) => k !== 'residents');
    return (
      <table>
        <thead>
          <tr>
            {keys.map((k) => <th key={k}>{k}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => <PlanetItem data={planet} key={planet.name} />)}
        </tbody>
      </table>
    );
  }
}

PlanetsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (request) => dispatch(fetchData(request)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsTable);
