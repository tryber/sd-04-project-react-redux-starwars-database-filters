import SEARCH_BAR_CHANGE from '../actions/onChange';
import INITIAL_STATE from './index';

const reducerOnChange = (state = INITIAL_STATE, action) => {
  console.log('chamou a actionOnChange', action);
  switch (action.type) {
    case SEARCH_BAR_CHANGE:
      return {
        ...state,
        filters: { ...state.filters, filterByName: { name: action.inputText.value } },
      };
    default:
      return state;
  }
};

export default reducerOnChange;
