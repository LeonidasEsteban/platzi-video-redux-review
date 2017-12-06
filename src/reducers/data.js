import { List as list } from 'immutable';
import {
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES
} from '../action-types/index';
import { searchAsyncEntities } from '../actions/index';

function data(state = {}, action) {
  switch (action.type) {
    // case 'ADD_ENTITY':
    //   return state
    // case 'REMOVE_ENTITY':
    //   return state
    case SEARCH_ENTITIES: {
      // let results = [];
      // if (action.payload.query) {
      //   const list = state.categories[2].playlist;
      //   results = list.filter((item) => {
      //     if (item.author.includes(action.payload.query)) {
      //       return item
      //     }
      //   });
      // }

      // return {
      //   ...state,
      //   search: results,
      // }
      //
      return state.set('search', action.payload.query);
    }
    case SEARCH_ASYNC_ENTITIES: {
      return searchAsyncEntities(action.payload.query);
    }
    default:
      return state
  }
}

export default data;
