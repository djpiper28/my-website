import React from "react";

const RoundImg = ({ img_url }) => {
  return (
    <div className="ParentImg">
      <img src={img_url} className="RoundImg" />
    </div>
  );
};

export default RoundImg;
