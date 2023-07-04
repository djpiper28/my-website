import react from "react";
import Paragraph from "./Paragraph.jsx";
import ImageCard from "./ImageCard.jsx";
import Header from "./Header.jsx";

function Projects() {
  return ( 
    <div className="StackedDiv">
      <Header text="2023" />
      <Paragraph 
        href="https://github.com/MonarchDevelopment/mtg-search-engine"
        text="MTG Search Engine"
        small_text={
          "04/07/2023 - Finished a working version of the library. This version " +
          "is a multi-threaded C implementation with a GLR parser. That is all " +
          "Techno-Bollox for it took a long time to make and I am proud of it."
        }
      />
      <ImageCard
        image_url="https://djpiper28.co.uk/cdn/bjss-week-1.JPG"
        text="Survived Week 1 of BJSS Academy"
        small_text={
          "19/06/2023 - I survived week 1 of the academy program mostly intact. " +
          "During this week I learnt a lot, and had a good time. Even got to go to " +
          "Leeds, quite nice there actually."
        }
      />
      <ImageCard 
        image_url="https://djpiper28.co.uk/cdn/bjss-academy.jpg"
        text="Joining BJSS Academy"
        small_text="12/06/2023 - I joined BJSS as an Academy Engineer!"
      />
      <ImageCard
        href="https://github.com/djpiper28/cumbridge-hack"
        image_url="https://djpiper28.co.uk/cdn/cambridge-hack.png"
        text="Cambridge Spyder Lite"
        small_text={
          "13/04/2023 - An abomination was made... An AI powered emotional support horse. " +
          "Yes it is literally duck taped together."
        }
      />
      <ImageCard
        href="https://github.com/djpiper28/hack-sussex-23"
        image_url="https://djpiper28.co.uk/cdn/crackedfm.png"
        text="Hack Sussex - Cracked FM!"
        small_text={
          "19/02/2023 - Sinan, Leo, and I won Hack Sussex with our Cracked FM! project " + 
          " - a pirate radio station that was powered by pirates, AI, and 5V DC."
        }
      />
      <ImageCard
        href="https://royalhackaway.com/"
        image_url="https://djpiper28.co.uk/cdn/rh-small-1024.png"
        text="Royal Hackway v6"
        small_text={
          "05/02/2023 - I helped to host Royal Hackway, lost lots of sleep and maybe " +
          "even some sanity... but it was brilliant. We had 121 in person attendees and " +
          "another couple dozen or so online. It was a really fun hackathon but streaming " +
          "it was not easy. If I ever see NodeCG again..."
        }
      />
      <Paragraph
        text="Dropping Out"
        small_text={
          "--/01/2023 - I decided to drop out of university and start working on " +
          "myself and projects. Following this I spent a lot of time programming, " +
          "searching for jobs, and 'sorting myself out'."
        }
      />
      <Header text="2022" />
    </div>
  );
}

export default Projects;
