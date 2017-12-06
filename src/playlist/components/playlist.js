import React, { Component } from 'react';
// import Media from '../components/media';
import Media from '../containers/media';
import './playlist.css';

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((id) => (
          <Media
            openModal={props.openModal}
            key={id}
            id={id}
          />
        ))
      }
    </div>
  )
}


export default Playlist;
