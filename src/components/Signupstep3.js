import React from "react";
import "./Signupstep3.css";

export default function Signupstep3(prop) {
  return (
    <div className="signupmain">
      <div className="signup-container">
        <div>Signupstep3</div>
        <button onClick={() => prop.setActive("signup1")}>Signupstep1</button>
      </div>
    </div>
  );
}
