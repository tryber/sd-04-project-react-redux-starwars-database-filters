import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';

export class Table extends Component {
  componentDidMount() {
    const { getStarsWarsPlanets } = this.props;
    getStarsWarsPlanets();
  }

  render() {
    const { data, isFetching } = this.props;
    if (isFetching) return <div>Loading...</div>;
    const title = Object.keys(data[0]).filter((key) => key !== 'residents');
    return (
      <div>
        <table>
          <thead>
            <tr>
              {title.map((element) => <th key={element}>{element}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={planet.name}>
                {title.map((element) => <td key={element}>{planet[element]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isFetching: state.reducerPlanets.isFetching,
    data: state.reducerPlanets.data,
  }
);

const mapDispatchToProps = (dispatch) => ({
  getStarsWarsPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  getStarsWarsPlanets: PropTypes.func.isRequired,
  data: PropTypes.shape.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
