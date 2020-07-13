import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ heads }) => (
  <tr>{heads.map((head) => head !== 'residents' && <th key={head}>{head}</th>)}</tr>
);

TableHeader.propTypes = {
  heads: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader;
