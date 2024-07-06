import React from "react";
import "./Hero.css";
import back from "../assets/left-arrow.png";
import front from "../assets/right-arrow.png";
import bell from "../assets/bell.png";
import { Link } from "react-router-dom";

// import { Navigate } from "react-router-dom";

export default function Hero(props) {
  let songIndex = 0;
  let audioElement = new Audio("songs/1.mp3");
  let masterPlay = document.getElementById("masterPlay");
  let myProgressBar = document.getElementById("myProgressBar");
  let gif = document.getElementById("gif");
  let masterSongName = document.getElementById("masterSongName");
  let songItems = Array.from(document.getElementsByClassName("songItem"));

  return (
    <div className="hero-main">
      {/* <div className="songList"> */}
      <div className="loginbar">
        <div className="nav-btn-container">
          <button className="nav-btn back">
            <img src={back} alt={1} />
          </button>
          <button className="nav-btn front">
            <img src={front} alt={1} />
          </button>
        </div>
        <div className="profile-btn-container">
          <button id="premium" className="profile-btn">
            Explore Premium
          </button>
          <button className="nav-btn profile-btn notification">
            <img src={bell} alt={1} />
          </button>
          <Link to="/signin/" id="profile" className="profile-btn profile">
            U
          </Link>
        </div>
      </div>
      <div className="songItemContainer">
        {props.songs.map((song, index) => {
          return (
            <div className="songItem">
              <img src={song.coverPath} alt={song.songName} className="cover" />
              <span className="songName">{song.songName}</span>
              <span className="songlistplay">
                <span className="timestamp">
                  05:34{" "}
                  <i id={index} className="far songItemPlay fa-play-circle" />
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
