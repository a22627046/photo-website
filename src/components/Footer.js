import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div class="links">
        <Link to="#">
          <img
            className="normal"
            src={[require("../assets/facebook.png")]}
            alt="facebook"
          />
        </Link>
        <Link to="#">
          <img
            class="normal"
            src={[require("../assets/instagram.png")]}
            alt="instagram"
          />
        </Link>
        <Link to="#">
          <img
            class="normal"
            src={[require("../assets/twitter.png")]}
            alt="twitter"
          />
        </Link>
        <Link to="#">
          <img
            id="special"
            src={[require("../assets/youtube.png")]}
            alt="youtube"
          />
        </Link>
      </div>
      <div className="copyright">Better Life 2022©</div>
    </div>
  );
};

export default Footer;
