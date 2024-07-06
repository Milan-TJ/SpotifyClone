import React from "react";
import "./Signupstep1.css";

export default function Signupstep1(prop) {
  return (
    <div className="signupmain">
      <div className="signup-container">
        <div>Signupstep1</div>
        <button onClick={() => prop.setActive("signup2")}>Signupstep2</button>
      </div>
    </div>
  );
}
