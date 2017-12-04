import React, { Component } from 'react';
import { connect } from 'react-redux';
import Playlist from '../components/playlist';

function mapStateToProps(state, props) {
  const playlist = props.playlist.map((mediaId) => {
    return state.data.entities.media[mediaId]
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
