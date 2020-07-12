import { createStore, applyMiddleware } from 'redux';
// a ação passa 1º pelo middleware e depois para o store
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;

/* No momento que que disparar a ação ela passará
pelo thunk e após repassada para a store

nessa app a ação é o envio da requisição para pegar
as infos dos planets === vá para actions e defina actionCreator */
