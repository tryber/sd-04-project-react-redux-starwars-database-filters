import React, { Component } from "react";
import { connect } from "react-redux";
import { swFilter } from "../action";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  getValue(e) {
    this.setState({ value: e.target.value });
    // capturando o que é digitado no input para
    // realizar a busca dos planetas no onChange
    this.props.swFilter(e.target.value);
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

const mapDispatchToProps = (dispatch) => ({
  swFilter: (name) => dispatch(swFilter(name)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
