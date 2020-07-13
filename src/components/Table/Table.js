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
            {Object.keys(data.results[0]).map((e, index) => (
              <th key={index}> {e} </th>
            ))}
          </tr>
        </thead>
        {data.results.map((planet, index) => (
          <tbody key={index}>
            <Tabelas planet={planet} />
          </tbody>
        ))}
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.reducerFetch.isLoading,
  data: state.reducerFetch.data,
});

export default connect(mapStateToProps)(Table);
