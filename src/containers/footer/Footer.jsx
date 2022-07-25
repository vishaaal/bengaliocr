import React, { useEffect } from "react";
import "./footer.css";
import { FcLike } from "react-icons/fc";
// import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  return (
    <div className="footer--container">
      <p>
        Made with <FcLike /> by Group 20
      </p>
    </div>
  );
};

export default Footer;
