import React, { Component } from 'react';
import { connect } from 'react-redux';
import Playlist from '../components/playlist';

function mapStateToProps(state, props) {
  // const playlist = props.playlist.map((mediaId) => {
  //   return state.data.entities.media[mediaId]
  // })
  const playlist = props.playlist.map((mediaId) => {
    return state.get('data').get('entities').get('media').get(mediaId)
  })
  return {
    playlist
  }
}

class PlaylistContainer extends Component {
  render() {
    return <Playlist {...this.props} />
  }
}

export default connect(mapStateToProps)(PlaylistContainer);
