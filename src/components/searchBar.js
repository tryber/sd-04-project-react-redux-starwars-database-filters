import React from 'react';
import { connect } from 'react-redux';
import { inputName } from '../actions/index';


const SearchBar = ({ inputName1 }) => {
  return (
    <form>
      <label htmlFor="inputTexto">Filtre por nome</label>
      <input type="text" name="inputTexto" data-testid='name-filter' onChange={inputName1}/>
    </form>
  );
};
// const onChange = (event) => {
//   return (
//     event.target.value
//   )
// }

const mapDispatchToProps = (dispatch) => ({
  inputName1: (event) => dispatch(inputName(event)),
});

export default connect(null,mapDispatchToProps)(SearchBar);
