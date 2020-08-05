import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderTable extends Component {
  render() {
    const { data } = this.props;
    const NewData = data.map((element) => {
      delete element.residents;
      return element;
    });

    return (
      <thead>
        <tr>
          {Object.keys(NewData[0]).map((head) => (
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

HeaderTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
