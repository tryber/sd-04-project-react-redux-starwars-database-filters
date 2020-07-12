import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';
import HeaderTable from './HeaderTable';

class Table extends Component {
  render() {
    const { data } = this.props;
    // console.log(data)
    return (
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
          elTds.forEach((td) => {
            elTr.insertBefore(td, null);
            return elTbody.insertBefore(elTr, null);
          });
          return true;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
});

export default connect(mapStateToProps, null)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
