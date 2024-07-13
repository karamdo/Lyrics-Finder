import React from "react";
import "./index.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      setLyrics(res.data.lyrics);
    });
  }

  return (
    <div className="App">
      <h1>Lyrics Finder ????</h1>
      <div className="head">
        <input
          className="inp"
          type="text"
          placeholder="Artist name"
          onChange={(e) => {
            setArtist(e.target.value);
          }}
          autoFocus
        />
        <input
          className="inp"
          type="text"
          placeholder="Song name"
          onChange={(e) => {
            setSong(e.target.value);
          }}
        />
        <button className="btn" onClick={() => searchLyrics()}>
          Search
        </button>
      </div>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
}

export default App;
