import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetch } from '../actions';

const Content = ({ data, filters }) => {
  const { filterName } = filters;
  return (
    <tbody>
      {data
        .filter((planet) => planet.name.toLowerCase().includes(filterName.toLowerCase()))
        .map((planet) => (
          <tr key={planet.orbital_period}>
            {Object.values(planet).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetsState: [],
      headersState: [],
    };
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets().then((response) => {
      response.data.forEach((planet) => {
        // eslint-disable-next-line no-param-reassign
        delete planet.residents;
      });
      this.setState({
        planetsState: response.data,
        headersState: Object.keys(response.data[0]),
      });
    });
  }

  render() {
    const { filterName } = this.props;
    const { headersState, planetsState } = this.state;
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            {headersState.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <Content data={planetsState} filters={{ filterName }} />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.data,
  filterName: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

Content.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({
    filterName: PropTypes.string,
  }).isRequired,
};
