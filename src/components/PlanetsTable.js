import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import PlanetItem from './PlanetItem';
import '../styles/PlanetsTable.css';

class PlanetsTable extends Component {
  componentDidMount() {
    this.props.fetchData('planets');
  }

  render() {
    const { data, filterByName: { name } } = this.props;
    if (data.length < 1) return <div>loading...</div>;
    const keys = Object.keys(data[0]).filter((k) => k !== 'residents');
    const filteredData = name
      ? data.filter(({ name: p }) => p.toLowerCase().includes(name.toLowerCase()))
      : data;
    return (
      <table className="planets-table">
        <thead>
          <tr>
            {keys.map((k) => <th key={k}>{k.replace('_', ' ')}</th>)}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((planet) => <PlanetItem data={planet} key={planet.name} />)}
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
  ...state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (request) => dispatch(fetchData(request)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsTable);
