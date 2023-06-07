import { useState, useEffect } from "react";
import "./App.css";
import Paragraph from "./Paragraph.jsx";
import RoundImg from "./RoundImage.jsx";
import Header from "./Header.jsx";
import ImageCard from "./ImageCard.jsx";
import RepoCard from "./RepoCard.jsx";
import Repos from "./Repos.jsx";

function App() {
  const [githubData, setGithubData] = useState({});
  const [repos, setRepos] = useState([]);
  const [externalRepos, setExternalRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/djpiper28")
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data);
      });
  }, []);

  useEffect(() => {
    try {
      fetch("https://api.github.com/users/djpiper28/repos")
        .then((response) => response.json())
        .then((data) => {
          setRepos(
            data
              .sort((a, b) => {
                return (
                  a.stargazers_count + a.forks_count * 2 <
                  b.stargazers_count + b.forks_count * 2
                );
              })
              .slice(0, 6)
          );
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    try {
      let repoData = [];
      Repos.map((repo) => {
        fetch("https://api.github.com/repos/" + repo)
          .then((response) => response.json())
          .then((data) => repoData.append(data));
      });
      setExternalRepos(
        repoData.sort((a, b) => {
          return (
            a.stargazers_count + a.forks_count * 2 <
            b.stargazers_count + b.forks_count * 2
          );
        })
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="RootDiv">
      <Header text="Danny Piper" />

      <div className="StackedDiv">
        <RoundImg img_url="https://www.djpiper28.co.uk/cdn/main_image.jpg" />
        <Paragraph
          text={
            "I am Danny Piper, I am a very strong backend developer. " +
            "Who likes C, C++, GoLang and, Python. I am always looking " +
            "for new opportunities to develop my skills and, meet new people."
          }
          small_text={
            "I am in my second year of Computer Science (MSCI Information Security) at Royal Holloway of London. " +
            "My favourite programming language is C, however that is not what is used the most at uni " +
            "(can't see why). However, Java, which is used a lot, is still very nice. " +
            "All programming languages I use. (fluent) Java, (fluent) C, (fluent) Go, (fluent) Python, " +
            "(fluent) SQL, (learning) C++, (learning) Javascript & Typescript and, (very new) Rust. " +
            "Other technology I use: SQLite, Postgresql <3, Jenkins (makes this site!), Git & Github, SVN, (Arch) Linux " +
            "Circle CI and, ReactJs (this site uses it!). "
          }
        />
      </div>

      <div className="StackedDiv">
        <Header text="Professional" />
        <ImageCard
          image_url="https://www.djpiper28.co.uk/cdn/all.jpg"
          text={
            "Hard working, polite and, always looking for a challenge. " +
            "I do my best work as a member of a team"
          }
          small_text={
            "I have been working all my life. During sixth-form I worked at a fast food chain and, now at uni " +
            "I have been spending a lot of time reading about databases and, other advanced topics. Also, " +
            "I am currently working with some friends on a project called Arcio, stay tuned for more!"
          }
        />

        <div className="GenericGrid">
          <Paragraph
            text={
              "Always looking to learn - this year I have set out to learn new programming " +
              "languages and technologies such as GoLang and, ReactJs to diversify my skills."
            }
            small_text={
              "I have been learning lots of different system programming languages such as C++ " +
              "and, GoLang recently to improve my skills at problem solving. One of my favourites " +
              "that I have recently looked at is GoLang."
            }
          />
          <ImageCard
            image_url="https://www.djpiper28.co.uk/cdn/skilled.png"
            href=""
            text="Life Long Programmer"
            small_text={
              "I have been programming since I was about 12 as I have always had a passion to understand " +
              "computers and to solve problems."
            }
          />
        </div>
      </div>

      <div className="StackedDiv">
        <Header text="Personal Projects" />
        <ImageCard
          href="https://computingsociety.co.uk"
          image_url="https://www.djpiper28.co.uk/cdn/compsoc.png"
          text={"RHUL Computing Society Outreach and Promotions (2022/2023)"}
          small_text={
            "I have been working on the comittee to deliver fun and, educational events to " +
            "Computer Science students at Royal Holloway. Recently we held a large event called " +
            "Royal Hackaway v5, the checkin system was written by me in C++. I was also the Events " +
            "Director in 2020/2021"
          }
        />
        <ImageCard
          href="https://github.com/MonarchDevelopment"
          image_url="https://www.djpiper28.co.uk/cdn/monarch.png"
          text={
            "I have been a volunteer developer at Monarch for just over a year now."
          }
          small_text={
            "Together, a small team and I have been working on software to run and, analyse " +
            "tournaments for a niche eSports (cEDH MTG). For this I have written a large game " +
            "bot in C and, worked on the python discord bot. Currently with this project we are " +
            "working on a desktop app, rewrite of the discord bot and, an analysis website. " +
            "I am putting a lot of work into the desktop app at the moment which uses Qt, C++, " +
            "CMake, Rust FFI bindings using cbindgen. Overall this is a very exciting project."
          }
        />
      </div>

      <div className="StackedDiv">
        <Header text="Hobbies and Interests" />
        <div className="GenericGrid">
          <Paragraph
            text="Self Hosting and, Linux Server Administration"
            small_text={
              "At the start of my second year at university, I purchased a second-hand server and " +
              "getting into server administration and, learning how to use tools such as nginx and, systemd. " +
              "This has been a really fun time so far as I have learnt a lot about software such as firewalld " +
              "and, Postgresql. " +
              "Infact, I use this quality server to serve this site and, automatically deploy it with Jenkins."
            }
          />
          <ImageCard
            image_url="https://www.djpiper28.co.uk/cdn/powerwolf.jpg"
            href=""
            text="Listening to Metal"
            small_text="I love to listen to listen to metal music, some of my favourite bands are Power Wolf (left), Sabaton, Motionless in White and, Raubtier."
          />
          <Paragraph
            text="Tabletop Wargames"
            small_text={
              "I play Warhammer 40,000 and, other tabletop wargames with my friends. I really enjoy painting " +
              "my minis and building model kits. Unfortunately James Workshop are very pricy so I cannot buy " +
              "their kits and have a healthy wallet. I have been eyeing up Perry Miniatures lately... " +
              "However if you want to send me money or even give me a job so I waste more money then " +
              "please do (half sarcastic)."
            }
          />
        </div>
        <ImageCard
          image_url="https://www.djpiper28.co.uk/cdn/cuppa.jpg"
          href=""
          text="A Nice Cuppa"
          small_text={
            "I enjoy chilling with my friends and, having a nice cuppa. I usually have coffee but I also love " +
            "a good cup of tea (and maybe even a bland biscuit to dip in it)."
          }
        />
        <div className="GenericGrid">
          <Paragraph
            text="Table Top Role Playing Games"
            small_text={
              "I am also a fan of ttrps such as DnD, Call of Cthultu and, Cyberpunk. I play these with my " +
              "friends regularily and it is great fun."
            }
          />
          <Paragraph
            text="Programming In My Spare Time"
            small_text={
              "I like to program in my spare time and, I have been working on a few great projects as of late: " +
              " 'testing.h' (an ANSI C testing framework); 'Squire Core'/'Squire Desktop' (Monarch Development's) " +
              "tournament management software and; 'mtg-search-engine' a component of Squire Desktop " +
              "that allows for indexing and, searching of Magic the Gathering cards."
            }
          />
        </div>
      </div>

      <div className="StackedDiv">
        <Header text="Some of My Coding Projects" />
        <div className="GitBanner">
          <a href={githubData.html_url}>
            <img src={githubData.avatar_url} className="GithubAvatar" />
          </a>

          <div className="StackedDiv">
            <b className="GithubName">
              Github <a href={githubData.html_url}> {githubData.login}</a> |{" "}
              {githubData.public_repos} Repos and Counting!
            </b>
            <p className="GithubText"> {githubData.bio}</p>
          </div>
        </div>

        <div className="RepoDiv">
          {repos.map((repo) => (
            <RepoCard
              name={repo.name}
              desc={repo.description}
              url={repo.html_url}
              lang={repo.language}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
            />
          ))}
          {externalRepos.map((repo) => (
            <RepoCard
              name={repo.name}
              desc={repo.description}
              url={repo.html_url}
              lang={repo.language}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
            />
          ))}
        </div>
      </div>

      <div className="StackedDiv">
        <Header text="Contact Me" />
        <div className="CardDiv">
          <div className="ParagraphText">
            <p>
              You can contact me via{" "}
              <a href="mailto://djpiper28@gmail.com">email</a>{" "}
              (djpiper28@gmail.com)
              <br />
              You can view my{" "}
              <a href="https://www.linkedin.com/in/djpiper28">Linked In</a>{" "}
              profile
              <br />
              You can download my{" "}
              <a href="https://djpiper28.co.uk/cdn/DannyPiper.pdf">CV</a>
              <br />
              You can contact me on Discord (I respond fastest here){" "}
              <b>@dannypiper</b>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
