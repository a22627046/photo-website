import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div class="links">
        <a href="#">
          <img className="normal" src="./icons/facebook.png" alt="facebook" />
        </a>
        <a href="#">
          <img class="normal" src=".//icons/instagram.png" alt="instagram" />
        </a>
        <a href="#">
          <img class="normal" src=".//icons/twitter.png" alt="twitter" />
        </a>
        <a href="#">
          <img id="special" src=".//icons/youtube.png" alt="youtube" />
        </a>
      </div>
      <div className="copyright">Better Life 2022©</div>
    </div>
  );
};

export default Footer;
