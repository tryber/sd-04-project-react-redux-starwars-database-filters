import PropTypes from "prop-types";
import React from 'react';

export default function PlanetItem({ data }) {
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'residents');
  return (
    <tr>
      {entries.map((info) => <td key={`${data.name} ${info[0]}`}>{info[1]}</td>)}
    </tr>
  );
}

PlanetItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}
