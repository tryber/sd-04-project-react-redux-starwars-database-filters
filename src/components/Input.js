import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeInputAct } from '../actions/index';

const Input = (props) => {
  const { changeInput } = props;
  return (
    <div>
      <label htmlFor="inputText">Texto Contém</label>
      <input
        data-testid="name-filter"
        type="text"
        name="inputText"
        onChange={changeInput}
      />
    </div>
  );
};

Input.propTypes = {
  changeInput: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeInput: (event) => dispatch(changeInputAct(event.target)),
});

export default connect(null, mapDispatchToProps)(Input);
