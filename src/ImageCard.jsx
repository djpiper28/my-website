import React from "react"

const ImageCard = ({image_url, right_text}) => {
	return <div>{image_url} | {right_text}</div>
};

export default ImageCard;
