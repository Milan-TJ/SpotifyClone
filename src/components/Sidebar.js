import React from "react";
import "./Sidebar.css";
import home from "../assets/home.png";
import search from "../assets/search.png";
import lib from "../assets/library.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-main">
      <div className="sidebar-top">
        <ul className="nav">
          <li>
            <Link to={"/home"}>
              <img className="side-img" src={home}  alt=""/>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <img className="side-img" src={search} alt="" />
              Search
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <ul className="nav nav-bottom">
          <li>
            <Link to={"/home"}>
              <img className="side-img" src={lib} alt="" />
              Library
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
