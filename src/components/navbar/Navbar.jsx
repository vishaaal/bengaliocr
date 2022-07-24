import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [mouseEvent, setMouseEnter] = useState(false);
  const [mouseEvent2, setMouseEnter2] = useState(false);
  return (
    <div className="navbar--container">
      <ul className="navbar--container--list">
        <li
          className={`${
            mouseEvent
              ? "animate--navbar--container--listItems "
              : "navbar--container--listItems"
          }`}
          onMouseEnter={() => {
            setMouseEnter(true);
          }}
          onMouseLeave={() => {
            setMouseEnter(false);
          }}
        >
          Home
        </li>
        <li
          className={`${
            mouseEvent2
              ? "animate--navbar--container--listItems "
              : "navbar--container--listItems"
          }`}
          onMouseEnter={() => {
            setMouseEnter2(true);
          }}
          onMouseLeave={() => {
            setMouseEnter2(false);
          }}
        >
          Your Uploads
        </li>
        {/* <li className="navbar--container--listItems">Your Uploads</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
