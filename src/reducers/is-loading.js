import { IS_LOADING } from '../action-types/index';

function isLoading(state, action) {
  switch(action.type) {
    case IS_LOADING: {
      return state.set('active', action.payload.value)
    }
    default:
      return state
  }
}

export default isLoading
