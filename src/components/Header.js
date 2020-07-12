import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataFetch } from '../actions';

class Header extends Component {
  componentDidMount() {
    const { request } = this.props;
    request('https://swapi-trybe.herokuapp.com/api/planets/');
  }

  render() {
    // console.log(this.props.data)
    return (
      <div>
        <label htmlFor="filter-planets">Procurar </label>
        <input type="text" id="filter-planets" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  request: (url) => dispatch(dataFetch(url)),
});

// const mapStateToProps = (state) => ({
//   data: state,
// });

export default connect(null, mapDispatchToProps)(Header);
