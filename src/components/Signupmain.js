import React from "react";
import "./Signupmain.css";
import { Link } from "react-router-dom";
import ggl from "../assets/google.png";
import fb from "../assets/facebook.png";
import apple from "../assets/apple.png";

export default function Signupmain(prop) {



  return (
    <div className="signupmain">
      <div className="signup-container">
        <form className="signup-form" action="">
        <h1>Sign up to start Listening</h1>
          <label className="txtlbl-up" htmlFor="email">
            Email Address
          </label>
          <input type="text" name="email" placeholder="Email Address" />
          <p className="changeptype">Use phone number instead</p>
          <input
            onClick={() => prop.setActive("signup1")}
            type="button"
            defaultValue="Next"
          />
        </form>
        <div className="or">
          <hr></hr>
          <p className="text">or</p>
        </div>
        <div className="quicklogin-up">
          <button className="quickbtn-up">
            <img src={ggl} alt="404" />
            Continue with google
          </button>
          <button className="quickbtn-up">
            <img src={fb} alt="404" />
            Continue with Facebook
          </button>
          <button className="quickbtn-up">
            <img src={apple} alt="404" />
            Continue with apple
          </button>
        </div>
        <hr></hr>
        <div className="Signinlink">
            <p>
              Already have an account?
              <Link to="/signin">Login here</Link>
            </p>
          </div>
      </div>
    </div>
  );
}
