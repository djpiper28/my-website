import React from "react"

const Paragraph = ({text, small_text}) => {
    return (
        <div className="CardDiv">
            <p className="ParagraphText">{text}</p>
            <p className="ParagraphSmallText">{small_text}</p>
 		</div>
    )
};

export default Paragraph;
