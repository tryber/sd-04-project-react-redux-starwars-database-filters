import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions';

class FilterPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ name: event.target.value });
    this.props.filterByName(event.target.value);
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Type a Planet Name"
          value={text}
          onChange={(e) => this.onChange(e)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.filters.filterByName.name,
});
const mapDispatchToProps = (dispatch) => ({
  filterByName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlanet);

FilterPlanet.propTypes = {
  filterByName: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
