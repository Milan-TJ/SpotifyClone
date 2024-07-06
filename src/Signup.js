import React from 'react'
import Header from "./components/Header";
import Signupmain from './components/Signupmain';
import Signupstep1 from './components/Signupstep1';
import Signupstep2 from './components/Signupstep2';
import Signupstep3 from './components/Signupstep3';
import './Signup.css'
import Leagl from './components/Leagl';
import { useState } from 'react';



export default function Signup() {
  const [active,setActive] = useState("signup")
  return (
    <>
    <Header />
    {active ==="signup" && <Signupmain setActive={setActive} />}
    {active ==="signup1" && <Signupstep1 setActive={setActive} />}
    {active ==="signup2" && <Signupstep2 setActive={setActive} />}
    {active ==="signup3" && <Signupstep3 setActive={setActive} />}
    <Leagl/>
  </>
  )
}
