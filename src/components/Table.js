import React from 'react';
import { connect } from 'react-redux';
import './Table.css';
import HeaderTable from './HeaderTable';

const Table = ({ data }) => (
  <div>
    <p>StarWars Datatable with Filters</p>
    <HeaderTable />
    {data.forEach((planet) => {
      const elTbody = document.querySelector('.data-rows');
      const elTr = document.createElement('tr');
      const elTds = Object.keys(planet).filter((key) => key !== 'residents').map((k) => {
        const elTd = document.createElement('td');
        const value = planet[k];
        elTd.innerText = value;
        return elTd;
      });
      elTds.forEach((td, i) => {
        elTr.insertBefore(td, null);
        return elTbody.insertBefore(elTr, null);
      })
      return true;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

export default connect(mapStateToProps, null)(Table);
