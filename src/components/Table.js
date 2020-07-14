import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets from '../actions/index';

export class Table extends Component {
  componentDidMount() {
    const { getSWAPI } = this.props;
    getSWAPI();
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
              {title.map((element) => <th key={element} >{`${element}`}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((conteudo) => (
              <tr>
                {title.map((element) => <td key={element}>{conteudo[element]}</td>)}
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
  getSWAPI: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  getSWAPI: PropTypes.func.isRequired,
  data: PropTypes.shape.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
