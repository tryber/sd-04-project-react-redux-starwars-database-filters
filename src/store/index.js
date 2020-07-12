// 2) Criaçao da Store importando o createStore, thunk e applyM para
// realizar a estrutura básica do redux.

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
