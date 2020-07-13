import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swFilterName } from '../actions';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.getValue = this.getValue.bind(this);
  }

  getValue(e) {
    this.setState({ value: e.target.value });
    this.props.swFilterName(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.getValue(e)}
          data-testid="name-filter"
        />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   numericValues: state.filters.filterByNumericValues,
// });

const mapDispatchToProps = (dispatch) => ({
  swFilterName: (name) => dispatch(swFilterName(name)),
});

export default connect(null, mapDispatchToProps)(SearchInput);

SearchInput.propTypes = {
  swFilterName: PropTypes.func.isRequired,
};
