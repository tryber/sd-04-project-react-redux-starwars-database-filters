import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';

const Table = ({ data, loading }) => {
  const keys =
    data.length !== 0
      ? Object.keys(data[0]).filter((key) => key !== 'residents')
      : [];
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={planet.diameter}>
              {keys.map((key) => (
                <td key={key}>{planet[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
});

Table.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Table);
