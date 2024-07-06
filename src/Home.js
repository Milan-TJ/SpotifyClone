import React from 'react'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Playbar from './components/Playbar'
import './Home.css'
import { SongContext } from './context/SongContext'
import { useContext } from 'react'

export default function Home() {

  let songs = useContext(SongContext)

  return (
    <div className='home-main'>
      <div className='content'>
        <Sidebar/><Hero songs={songs} />
      </div>
      <Playbar/>
    </div>
  )
}
