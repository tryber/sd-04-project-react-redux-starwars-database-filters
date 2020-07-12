// 5) importar o reducer para criar o root que será importado
// diretamente no store.

import { combineReducers } from "redux";
import swReducer from "./swReducer";

const rootReducer = combineReducers({
  swReducer,
});

export default rootReducer;
