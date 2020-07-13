import SEARCH_BAR_CHANGE from './index';

const OnChange = (inputText) => ({
  type: SEARCH_BAR_CHANGE,
  inputText,
});

export default { SEARCH_BAR_CHANGE, OnChange };
