import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions';

class FilterName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Type a planet name"
          value={this.state.text}
          onChange={(event) => this.onChange(event)}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  filterByName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(null, mapDispatch)(FilterName);

FilterName.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
