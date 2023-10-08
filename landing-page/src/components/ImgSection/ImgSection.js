import React from "react";
import { Image } from "react-bootstrap";
import "../style.css";

function ImageSection() {
  return (
    <div id="image_parent">
      <Image
        src="./imageSectionn.jpg"
        style={{  backgroundColor: "rgba(0, 0, 0, 80%)   "     ,  height:"320px" }}
        className="image__pattern"
        alt="coffee-patternImg"
      />
    </div>
  );
}

export default ImageSection;
