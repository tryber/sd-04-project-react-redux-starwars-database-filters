import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeInputAct } from '../actions/index';

const Input = (props) => {
  const { inputText, changeInput } = props;
  return (
    <div>
      <label htmlFor="inputText">Texto Contém</label>
      <input type="text" name="inputText" value={inputText} onChange={changeInput} />
    </div>
  );
};

Input.propTypes = {
  changeInput: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  inputText: state.listaReducers.inputText,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (event) => dispatch(changeInputAct(event.target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
