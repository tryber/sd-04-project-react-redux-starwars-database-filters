import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableBody extends Component {
  render() {
    const { dados, keys } = this.props;
    return (
      <tbody>
        {dados.map((body) => (
          <tr key={`${body.name} pai`}>
            {keys.map((bodin) => (
              <td key={`${bodin} filho`}>{body[bodin]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableBody;
