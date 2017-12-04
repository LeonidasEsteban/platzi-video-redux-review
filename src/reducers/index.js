import { combineReducers } from 'redux';
import search from './search';
import entities from './entities';
import modal from './modal';

const rootReducer = combineReducers({
  searchResults: search,
  entities,
  modal,
})

export default rootReducer;
