import React, { Component } from 'react';
import { connect } from 'react-redux';

class BodyTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((planet) => (
          <tr key={planet.name}>
            {Object.keys(planet).map((information) => (
              <td>
                {information == "films"
                  ? planet[information].map((film) => (
                      <span key={film}>{film}</span>
                    ))
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
});

export default connect(mapState)(BodyTable);
