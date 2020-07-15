import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetch } from '../actions';

const Content = ({ data }) => (
  <tbody>
    {data.map((planet) => (
      <tr key={planet.orbital_period}>
        {Object.values(planet).map((value) => (
          <td key={value}>{value}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

class Table extends React.Component {
  // ({ fetchPlanets, planets }) =>

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
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            {this.state.headersState.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <Content data={this.state.planetsState} />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.reducer ? state.reducer.data : [],
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
};

Content.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
