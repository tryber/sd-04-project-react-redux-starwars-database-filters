import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../../action';

class FilterByName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    const { filterByName } = this.props;
    const { text } = this.state
    this.setState({ text: event.target.value });
    filterByName(text);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          value={this.state.text}
          placeholder="Pesquise um planeta"
          onChange={(event) => this.onTextChange(event)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(FilterByName);
