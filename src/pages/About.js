import React from "react";

const About = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="reactIcon">
        <img src="./icons/react.png" alt="react" />
      </div>
      <div className="codingIcon">
        <img src="./icons/coding.png" alt="coding" />
      </div>
      <div className="about">
        <p>
          <h1>如何使用本網站？</h1>
        </p>
        <br />
        <p>可使用英文搜尋關鍵字，找到您喜愛的圖片</p>
        <br />
        <p>點選 Load More 載入更多圖片</p>
      </div>
    </div>
  );
};

export default About;
