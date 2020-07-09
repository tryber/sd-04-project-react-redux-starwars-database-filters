import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets from '../actions/fetchPlanets';

// const tableTitles = Object.keys(data[0]);
// console.log(tableTitles);

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { data, isFetching } = this.props;
    if (isFetching) return <p>Loading...</p>;
    const tableTitles = Object.keys(data[0]);
    return (
      <table>
        <thead>
          <tr>
            {tableTitles.map((title) => <th key={title}>{title}</th>)}
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  getPlanets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
