import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component {
  render() {
    return(
      <div className="Playlist">
        <input value={'New Playlist'}/>
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;