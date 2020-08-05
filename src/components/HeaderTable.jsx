import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderTable extends Component {
  render() {
    const { data } = this.props;
    const removeCollumResidents = () => {
      const newData = data.map((column) => {
        delete column['residents'];
        return column;
      });
      return newData;
    };
    const newData = removeCollumResidents(data);

    return (
      <thead>
        <tr>
          {Object.keys(newData[0]).map((head) => (
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
