import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGetPlanet } from '../actions';

export class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }
  render() {
    const { data } = this.props;
    const attributes = data[0]
      ? Object.keys(data[0]).filter((attribute) => attribute !== 'residents')
      : [];
    return (
      <div>
        <span>StarWars Datatable with Filters</span>
        <thead>
          <tr>
            {attributes.map((index) => (
              <th key={index}>{index}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((planet, index) => (
            <tr key={index}>
              {attributes.map((prop, index) => (
                <td key={index}>{planet[prop]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchGetPlanet()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
