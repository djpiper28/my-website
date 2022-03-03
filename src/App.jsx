import { useState, useEffect } from 'react'
import './App.css'
import Paragraph from './Paragraph.jsx'
import RoundImg from './RoundImage.jsx'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [githubData, setGithubData] = useState({});

  useEffect(() => {
  	fetch("https://api.github.com/users/djpiper28")
				.then(response => response.json ())
				.then(data => {
  					setGithubData(data);
				});
  }, []);

  return (
    <div className="RootDiv">
    			<div className="StackedDiv">
				      <RoundImg img_url="https://www.djpiper28.co.uk/mugshot.jpg" />
				   		<Paragraph text={
				"I am Danny Piper, I am a very strong backend developer. "
			+ "Who likes C, C++, GoLang and, Python. I am always looking "
      + "for new opportunities to develop my skills and meet new people."
							}/>
					</div>

					<div className="GitBanner">
              <a href={githubData.html_url}>
								<img src={githubData.avatar_url} className="GithubAvatar" />
							</a>

					    <div className="StackedDiv">
								<b className="GithubName">Github <a href={githubData.html_url}>{githubData.login}</a> | {githubData.public_repos} Repos</b>
						    <p>{githubData.bio}</p>
							</div>
					</div>

					<div className="StackedDiv">
							<Header text="My Hobbies" />
					
					</div>
    </div>
  )
}

export default App
