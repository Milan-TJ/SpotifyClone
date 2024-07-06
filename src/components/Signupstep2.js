import React from "react";
import "./Signupstep2.css";

export default function Signupstep2(prop) {
  return (
    <div className="signupmain">
      <div className="signup-container">
        <div>Signupstep2</div>
        <button onClick={() => prop.setActive("signup3")}>Signupstep3</button>
      </div>
    </div>
  );
}
