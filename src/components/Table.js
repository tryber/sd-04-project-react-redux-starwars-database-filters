import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestFetch } from '../actions/index';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';


class Table extends React.Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching, data } = this.props;

    if (isFetching) { return <h1>loading...</h1>; }

    else {
      return (
        <table>
          <thead>
            <HeadTable />
          </thead>
          <tbody>
            {data.map((planet) => <BodyTable planet={planet} key={planet.name} />)}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
