import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Tabelas from './Tabelas';

function Table({ isLoading, data }) {
  if (isLoading) return <span>L O A D I N G . . .</span>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data.results[0]).map((e, i) => (
              <th key={`${i + 1}`}>{e}</th>
            ))}
          </tr>
        </thead>
        {data.results.map((planet, i) => (
          <tbody key={i}>
            <Tabelas planet={planet} />
          </tbody>
        ))}
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  results: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.reducerFetch.isLoading,
  data: state.reducerFetch.data,
});

export default connect(mapStateToProps)(Table);
