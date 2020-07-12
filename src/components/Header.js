import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="name-filter" />
      </div>
    );
  }
}

export default Header;
