import React from "react";

const RepoCard = ({name, url, desc, lang, forks, stars}) => {
	return (
		<div className="RepoCardDiv">
        <div className="StackedDiv TopAlign" onClick={
              () => document.location.href=url

        }>
            <b className="ParagraphText RepoName">
                 {name}
            </b>
				    <p className="ParagraphSmallText">
               {desc}
            </p>
        </div>
        <div className="HDiv">
  			    <b className="ParagraphText">Mostly {lang == "C" ? "C <3": lang} | {forks} Forks | {stars} Stars</b>
				</div>
		</div>
	);
};

export default RepoCard;
