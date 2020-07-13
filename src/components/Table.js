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
    const { name, data, valueFilters } = this.props;

    const filterName = data.filter((planet) => (planet.name.toLowerCase().includes(name)));
    if(valueFilters.length !== 0) {
      return valueFilters.reduce((newList, { column, comparison, value }) => 
      newList.filter((planet) => {
        if(comparison === 'maior que') return Number(planet[column]) > Number(value);
        if(comparison === 'igual a') return Number(planet[column] === Number(value));
        if(comparison === 'menor que') return Number(planet[column] < Number(value));
        return planet;
      }), filterName);
    }
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
  valueFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  getPlanets: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  data: null,
  valueFilters: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
