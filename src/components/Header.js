import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../assets/spotify.png'

export default function header() {
  return (
    <div className="headermain">
      <Link to="/home">
        <img src={logo}  alt="404" />
      </Link>
      <h1 className='hname'>Spotify</h1>
    </div>
  )
}
