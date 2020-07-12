import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestFetch } from '../actions/index';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.toFilterPlanets = this.toFilterPlanets.bind(this);
  }

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  toFilterPlanets() {
    const { name, data } = this.props;

    const filterName = data.filter((planet) => (planet.name.toLowerCase().includes(name)));
    return filterName;
  }

  render() {
    const { isFetching } = this.props;

    if (isFetching) return <h1>loading...</h1>;

    return (
      <table>
        <thead>
          <HeadTable />
        </thead>
        <tbody>
          {this.toFilterPlanets().map((planet) => <BodyTable planet={planet} key={planet.name} />)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetsReducer.isFetching,
  data: state.planetsReducer.data,
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  getPlanets: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Table.defaultProps = {
  data: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
