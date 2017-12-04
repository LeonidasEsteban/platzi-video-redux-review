import { combineReducers } from 'redux';
// import search from './search';
import data from './data';
import modal from './modal';

const rootReducer = combineReducers({
  data,
  modal,
})

export default rootReducer;
