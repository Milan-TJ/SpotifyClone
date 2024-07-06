import React from "react";
import "./Playbar.css";
import play from "../assets/playing.gif"


export default function Playbar() {
  return (
    <>
      <div className="playbar">
        <div className="icons">
          {/* fontawesome icons */}
          <i className="fas fa-3x fa-step-backward" id="previous"></i>
          <i  className="far fa-3x fa-play-circle" id="masterPlay"></i>
          <i  className="fas fa-3x fa-step-forward" id="next"></i>
        </div>
        <input
          type="range"
          name="range"
          id="myProgressBar"
          min={0}
          defaultValue={0}
          max={100}
        />
      </div>
      <div className="songInfo">
        <img src={play}  alt="" id="gif" />
        <span id="masterSongName">24k Magic</span>
      </div>
    </>
  );
}
