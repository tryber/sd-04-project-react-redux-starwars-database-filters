import React, { Component } from 'react';
import { connect } from 'react-redux';

class BodyTable extends Component {
  render() {
    const { data, name } = this.props;
    const filterName = data.filter((planet) => planet.name.includes(name));

    return (
      <tbody>
        {filterName.map((planet) => (
          <tr key={planet.name}>
            {Object.keys(planet).map((information) => (
              <td>
                {information === 'films'
                  ? planet[information].map((film) => <span key={film}>{film}</span>)
                  : planet[information]}
                {planet[information]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapState = (state) => ({
  data: state.getPlanets.data,
  name: state.filters.filterByName.name,
});

export default connect(mapState)(BodyTable);
