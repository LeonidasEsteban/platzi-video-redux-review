function modal(state = {}, action) {
  switch(action.type) {
    case 'OPEN_MODAL':
      return state.merge({
        visibility: true,
        mediaId: action.payload.mediaId
      })
    case 'CLOSE_MODAL':
      return state.merge({
        visibility: false,
        mediaId: action.payload.mediaId
      })
    default:
      return state
  }
}

export default modal;
