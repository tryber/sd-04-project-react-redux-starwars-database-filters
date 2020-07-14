import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions/index';
import ConteudoTable from './ConteudoTable';

export class Table extends Component {
  componentDidMount() {
    const { getSWAPI } = this.props;
    getSWAPI();
  }

  render() {
    const { data, isFetching, input } = this.props;
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
            {ConteudoTable(data, title, input)}
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
    input: state.filters.filterByName.name,
  }
);

const mapDispatchToProps = (dispatch) => ({
  getSWAPI: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  getSWAPI: PropTypes.func.isRequired,
  data: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  input: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
