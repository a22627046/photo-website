import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-images" />
          <span> </span>
          Better Life
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-house-chimney-window" />
          <span> </span>
          Home
        </Link>
        <Link to="/about">
          <FontAwesomeIcon icon="fa-solid fa-file-contract" />
          <span> </span>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
