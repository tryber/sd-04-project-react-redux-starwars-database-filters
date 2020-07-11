const SEARCH_BAR_CHANGE = 'SEARCH_BAR_CHANGE';

const OnChange = (inputText) => ({
  type: SEARCH_BAR_CHANGE,
  inputText,
});

export default { SEARCH_BAR_CHANGE, OnChange };
