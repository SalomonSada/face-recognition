import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onImputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3 white">{"detect face in your url's picture, give it a try"}</p>
      <div className="center">
        <div className="center form br3 pa4 shadow-5">
          <input
            type="text"
            className="w-70 f4 pa2  center"
            onChange={onImputChange}
          />
          <button
            className="w-35 grow  f4  link  ph3 pv2 fiv black bg-light-gray br2"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
