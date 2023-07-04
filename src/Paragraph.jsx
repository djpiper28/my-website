import React from "react";

const Paragraph = ({ text, small_text, href="" }) => {
  return (
    <div className="CardDiv"
        onClick={() => {
          if (href != "") {
            document.location.href = href;
          }
        }}>
      <p className="ParagraphText">{text}</p>
      <p className="ParagraphSmallText">{small_text}</p>
    </div>
  );
};

export default Paragraph;
