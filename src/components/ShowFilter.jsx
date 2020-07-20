import React from 'react';
import { connect } from 'react-redux';

const ShowFilter = (props) => {
  const { filter } = props;
  if (filter.length === 0) return null;
  return (
    <div className="numeric-filters">
      {filter.map(({ column, comparison, value }) => (
        <div key={column}>
          <span>{column}</span>
          <span> - {comparison}</span>
          <span> - {value}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ filter: state.filters.filterByNumericValues });

export default connect(mapStateToProps)(ShowFilter);
