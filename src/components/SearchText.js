import React, { Component } from 'react';
import { searchTextAction } from '../actions/index';
import { connect } from 'react-redux';

export class SearchText extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <label>Procurar</label>
        <input 
          type='text'
          data-testid='name-filter'
          onChange={(event) => text(event.target.value)}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  text: searchTextAction,
}

export default connect(null, mapDispatchToProps)(SearchText);
