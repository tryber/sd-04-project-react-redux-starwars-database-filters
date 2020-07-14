import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';


function planetsTable(planets) {
  return (
    <table className="table">
      <tr className="table-column">
        <td className="table-cell" />
        <td className="table-cell" />
        <td className="table-cell" />
        <td className="table-cell">test</td>
        <td className="table-cell" />
        <td className="table-cell" />
        <td className="table-cell" />
        <td className="table-cell" />
        <td className="table-cell" />
        <td className="table-cell" />
        <td className="table-cell" />
      </tr>
    </table>
  );
}


class Table extends Component {
  componentDidMount() {
    const { planetsAPI, planets } = this.props;
    planetsAPI();
    console.log(planets);
  }

  render() {
    const { planets, isFetching } = this.props;
    console.log(planets);
    if (isFetching) { return (<div>Loading...</div>); }
    return (
      <div>
        { planetsTable(planets) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.getPlanets.planets,
  isFetching: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  planetsAPI: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
