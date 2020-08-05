const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TYPE_NAME':
      return true;
    default:
      return state;
  }
}
