import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import filters from './filters';

const rootReducer = combineReducers({ dataReducer, filters });
// const rootReducer = dataReducer;
// export default rootReducer;
export default rootReducer;
