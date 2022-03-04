import React from "react"

const RepoCard = ({name, url, desc, lang, forks, stars}) => {
	return (
		<div className="RepoCardDiv">
        <div className="StackedDiv TopAlign">
            <b className="ParagraphText RepoName" onClick={
              () => document.location.href=url
            }>
                 {name}
            </b>
				    <p className="ParagraphSmallText">
               {desc}
            </p>
        </div>
        <div className="HDiv">
  			    <b className="ParagraphText">Mostly {lang} | {forks} Forks | {stars} Stars</b>
				</div>
		</div>
	);
};

export default RepoCard;
