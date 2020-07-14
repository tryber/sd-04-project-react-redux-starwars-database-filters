import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ heads }) => (
  <tr className="table bg-info">{heads.map((header) => header !== 'residents' && <th key={header}>{header}</th>)}</tr>
);

TableHeader.propTypes = {
  heads: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader;
