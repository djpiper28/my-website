import { useState, useEffect } from 'react'
import './App.css'
import Paragraph from './Paragraph.jsx'
import RoundImg from './RoundImage.jsx'
import Header from './Header.jsx'
import ImageCard from './ImageCard.jsx'

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
          <Header text="Danny Piper" />
    			
    			<div className="StackedDiv">
				      <RoundImg img_url="https://www.djpiper28.co.uk/cdn/main_image.jpg" />
				   		<Paragraph text={
				"I am Danny Piper, I am a very strong backend developer. "
			+ "Who likes C, C++, GoLang and, Python. I am always looking "
      + "for new opportunities to develop my skills and, meet new people."
							} small_text={
				"Second year Computer Science (MSCI Information Security) at Royal Holloway of London."
							}/>
					</div>

					<div className="GitBanner">
              <a href={githubData.html_url}>
								<img src={githubData.avatar_url} className="GithubAvatar" />
							</a>

					    <div className="StackedDiv">
								<b className="GithubName">Github <a href={githubData.html_url}>{githubData.login}</a> | {githubData.public_repos} Repos and Counting!</b>
						    <p className="GithubText">{githubData.bio}</p>
							</div>
					</div>

					<div className="StackedDiv">
							<Header text="Professional" />
					    <ImageCard image_url="https://www.djpiper28.co.uk/cdn/all.jpg" text={
				"Hard working, polite and, always looking for a challenge. "
			+ "I do my best work as a member of a team"
							} small_text={
				"I have been working all my life. During sixth-form I worked at McDonalds and, now at uni "
      + "I have been spending a lot of time reading about databases and, other advanced topics. Also, "
      + "I am currently working with some friends on a project called Arcio, stay tuned for more!"
							}/>

					    <Paragraph text={
				"Always looking to learn - this year I have set out to learn new programming "
			+ "languages and technologies such as GoLang and, ReactJs to diversify my skills."
					    } small_text={
				"I have been learning lots of different system programming languages such as C++ "
      + "and, GoLang recently to improve my skills at problem solving. One of my favourites "
      + "that I have recently looked at is GoLang"			
					    }/>
					</div>

					<div className="StackedDiv">
								<Header text="Personal Projects" />
								<ImageCard image_url="https://www.djpiper28.co.uk/cdn/compsoc.png" text={
				"RHUL Computing Society Events Director"
				  			} small_text={
				"I have been working on the comitte to deliver fun and, educational events to "
			+ "Computer Science students at Royal Holloway. Recently we held a large event called "
      + "Royal Hackaway v5, the checkin system was written by me in C++."
								}/>
					      <ImageCard image_url="https://www.djpiper28.co.uk/cdn/monarch.png" text={
				"I have been a volunteer developer at Monarch for just over a year now."
					      } small_text={
				"Together, a small team and I have been working on software to run and, analyse "
      + "tournaments for a niche eSports (cEDH MTG). For this I have written a large game "
      + "bot in C and, worked on the python discord bot. Currently with this project we are "
      + "working on a rewrite of the discord bot and, an analysis website."
					      } />
					</div>

					<div className="StackedDiv">
								<Header text="Hobbies and Interests" />
								<Paragraph text="Self Hosting and, Linux Server Administration" small_text={
				"At the start of my second year at university, I purchased a second-hand server and "
      + "getting into server administration and, learning how to use tools such as nginx and, systemd. "
      + "This has been a really fun time so far as I have learnt a lot about software such as firewalld "
      + "and, postgresql."
								} />
				  </div>

				  <div className="StackedDiv">
								<Header text="Contact Me" />
								<div className="CardDiv">
								     <div className="ParagraphText">
												<p>
				You can contact me via <a href="mailto://djpiper28@gmail.com">email</a> (djpiper28@gmail.com)<br/>
				You can view my <a href="https://www.linkedin.com/in/danny-piper-b340b3130/">Linked In</a> profile<br/>
				You can contact me on Discord (I respond fastest here) <b>Danny P.#6969</b><br/>
												</p>	
				    				 </div>
								</div>
				  </div>
    </div>
  )
}

export default App
