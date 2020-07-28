import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className="ma4 center">
      <div className="mt2 absolute">
        <img
          id="inputImage"
          className="br3"
          width="500px"
          height="auto"
          alt=""
          src={imgUrl}
        />
        <div
          className="boundig-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
