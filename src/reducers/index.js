import { ACAO_A_SER_DESENVOLVIDA } from '../action';

const INITIAL_STATE = {
  data: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACAO_A_SER_DESENVOLVIDA:
      return {

      };
    default:
      return state;
  }
};
