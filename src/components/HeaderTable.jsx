import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderTable extends Component {
  render() {
    const { data } = this.props;
    data.forEach((element) => delete element.residents);

    return (
      <thead>
        <tr>
          {Object.keys(data[0]).map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

const mapState = (state) => ({
  data: state.getPlanets.data,
});

export default connect(mapState)(HeaderTable);
