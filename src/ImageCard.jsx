import React from "react";

const ImageCard = ({ image_url, href, text, small_text }) => {
  return (
    <div className="ImageDiv">
      <img
        src={image_url}
        className="CardImage"
        onClick={() => {
          if (href != "") {
            document.location.href = href;
          }
        }}
      />
      <div className="StackedDiv">
        <p className="ImageDivText">{text}</p>
        <p className="ParagraphSmallText">{small_text}</p>
      </div>
    </div>
  );
};

export default ImageCard;
