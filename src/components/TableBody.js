import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ planets, objKeys }) => (
  <tbody>
    {planets.map((planet) => (
      <tr key={`${planet.name} index`}>
        {objKeys.map((objKey) => (
          <td key={`${objKey} index 2`}>{planet[objKey]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

TableBody.propTypes = {
  objKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableBody;
