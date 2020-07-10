import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      head: [
        'name',
        'climate',
        'diameter',
        'edited',
        'films',
        'gravity',
        'orbital_period',
        'population',
        'rotation_period',
        'surface_water',
        'terrain',
        'url',
      ],
    };
  }

  tableHeadRender() {
    const { head } = this.state;
    return (
      <thead>
        <tr>
          {head.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>
    );
  }

  tableBodyRender() {
    const { head } = this.state;
    const { data } = this.props;
    return (
      <tbody>
        {data.map((planet) => (
          <tr key={planet.name}>
            {head.map((th) => (
              <td key={`${planet.name} ${th}`}>{planet[th]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    const { loading, data } = this.props;
    if (loading || !data) return <div>loading...</div>;
    return (
      <div className="table-container">
        <table>
          {this.renderTableHead()}
          {this.renderTableBody()}
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, data }) => ({
  loading,
  data,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
      films: PropTypes.arrayOf(PropTypes.string),
      created: PropTypes.string,
    }),
  ).isRequired,
};
