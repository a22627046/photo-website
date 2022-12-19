import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p className="photographer">
        <h3>Photographer: {data.photographer}</h3>
      </p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        <h3>
          Watch Whole Image:{" "}
          <a target="_blank" href={data.src.large}>
            Click Here
          </a>
        </h3>
      </p>
    </div>
  );
};

export default Picture;
