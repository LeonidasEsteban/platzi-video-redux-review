function search (state, action) {
  switch (action.type) {
    case 'SET_SEARCH': {
      const list = state.categories[2].playlist;
      const results = list.filter((item) => {
        if (item.author.includes(action.payload.query)) {
          return item
        }
      });
      return {
        ...state,
        search: action.payload.query,
        searchResults: results,
      }
    }
    default:
      return state
  }
}

export default search
