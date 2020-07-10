import React, { Component } from 'react';
import logo from '../media/logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="logo" alt="starwars name" />
      </div>
    );
  }
}

export default Header;