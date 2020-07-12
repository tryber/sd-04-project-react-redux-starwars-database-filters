import React from 'react';
import PropTypes from 'prop-types';
import { requestFetch } from '../actions';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';
import { connect } from 'react-redux';

class Table extends React.Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching, data } = this.props;

    if (isFetching) return <h1>loading...</h1>

    if (data) {
      return (
        <table>
          <thead>
            <HeadTable />
          </thead>
          <tbody>
            { data.map((planet) => <BodyTable planet={planet} key={planet.name}/>) }
          </tbody>
        </table>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetsReducer.isFetching,
  data: state.planetsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  getPlanets: PropTypes.func.isRequired,
};

Table.defaultProps = {
  data: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
