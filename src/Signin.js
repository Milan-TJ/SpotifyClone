import React from "react";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Leagl from './components/Leagl';
import "./Signin.css";
import ggl from "./assets/google.png";
import fb from "./assets/facebook.png";
import apple from "./assets/apple.png";

export default function Signin() {
  return (
    <>
      <Header />
      <div className="signinmain">
        <div className="signin-container">
          <h1>Log in to spotify</h1>
          <div className="quicklogin">
            <button className="quickbtn">
              <img src={ggl} alt="404" />
              Continue with google
            </button>
            <button className="quickbtn">
              <img src={fb} alt="404" />
              Continue with Facebook
            </button>
            <button className="quickbtn">
              <img src={apple} alt="404" />
              Continue with apple
            </button>
            <button className="quickbtn">Continue with phone number</button>
          </div>
          <hr className="hline" />
          <div className="signin-form">
            <form className="" action="">
              <label className="txtlbl" htmlFor="username" >Email or Username</label>
              <input type="text" name="username" placeholder="Email or Username" />
              <label className="txtlbl" htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
              <div className="remember">
                <label className="switch">
                  <input type="checkbox" name="rememberme" />
                  <span className="slider round"></span>
                </label>
                <label htmlFor="rememberme">Remember me</label>
              </div>
              <input type="button" defaultValue="Log In" />
              <p className="Uline">Forgot your password?</p>
            </form>
          </div>
          <hr className="hline" />
          <div className="Signuplink">
            <p>
              Don't have an account?
              <Link to="/signup">Signup for Spotify</Link>
            </p>
          </div>
        </div>
      </div>
      <Leagl/>
    </>
  );
}
