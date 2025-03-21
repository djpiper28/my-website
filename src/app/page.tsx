import { Gallery } from "@/components/photography/gallery";
import { H1 } from "@/components/typrography/H1";
import { H2 } from "@/components/typrography/H2";
import { P } from "@/components/typrography/P";
import { Language, Project } from "./project";
import { githubUrl } from "@/consts";
import { Link } from "@/components/typrography/Link";

export default function Home() {
  return (
    <>
      <H1>Hello World!</H1>
      <P>
        Hello World! I am Danny Piper, a Software Engineer working at Motorola
        Solutions, with an interest in solving complex problems with software.
      </P>
      <H2>My Projects</H2>
      <P>
        Here is a selection of my favourite projects, all of my projects can be
        found on my <Link href={githubUrl}>Github Page</Link>
      </P>
      <ul className="list-disc">
        <li>
          <Project
            name="My Website"
            description="This very website."
            repoUrl={`${githubUrl}/my-website`}
            languages={[Language.Typescript, Language.NextJs]}
          />
        </li>
        <li>
          <Project
            name="MTG Search Engine"
            description="A search engine for 'Magic: The Gathering' that has a syntax similar to Scryfall."
            repoUrl="https://github.com/SquireTournamentServices/mtg-search-engine"
            languages={[
              Language.C,
              Language.Cmake,
              Language.Python,
              Language.Typescript,
              Language.NextJs,
              Language.Go,
            ]}
            internalUrl="/projects/mtg-search-engine"
          />
        </li>
        <li>
          <Project
            name="Cockatrice Tournament Bot"
            description="A (now defunct) bot that helped to run tournaments for 'Magic: The Gathering' during The Covid Pandemic."
            repoUrl={`${githubUrl}/CockatriceTournamentBot`}
            languages={[Language.C, Language.Cpp, Language.Cmake]}
          />
        </li>
        <li>
          <Project
            name="AI Pirate Radio"
            description="The winner of Hack Sussex 2023, the codebase is quite messed but the project is very cool."
            repoUrl="https://github.com/djpiper28/hack-sussex-23"
            languages={[Language.Python, Language.Java]}
          />
        </li>
        <li>
          <Project
            name="Cards Against Humanity Clone"
            description="Yet another clone of Cards Against Humanity, written in Go using websockets."
            repoUrl="https://github.com/djpiper28/cards-against-humanity"
            languages={[Language.Typescript, Language.Go]}
          />
        </li>
        <li>
          <Project
            name="Incremental JSON Parser"
            description="An Incremental JSON Parser library for Rust, that allows for fast memory efficient parsing of large JSON files. (WIP, when I finish it I will add more info)"
            repoUrl="https://github.com/djpiper28/inc-json-rs"
            languages={[Language.Rust]}
          />
        </li>
      </ul>
      <H2>My Interests</H2>
      <ul className="list-disc">
        <li>
          <P>Programming</P>
          <P>
            I enjoy programming in Go, C, C++, and Rust. However I do tinker
            with many other languages and tools.
          </P>
        </li>
        <li>
          <P>Self Hosting</P>
          <P>
            I try to self host as much as I can: websites, game servers, and
            Discord bots. I have setup a Kubernetes cluster (with a stunning one
            node for cost reasons) that I host all of my applications on.
          </P>
          <P>
            You can learn more about my setup{" "}
            <Link href="/self-hosting">here</Link>.
          </P>
        </li>
        <li>
          <P>Tabletop Wargaming</P>
          <P>
            I play tabletop wargames such as Warhammer, and Bolt-Action. I am
            quite poor at painting my minis but I enjoy it nonetheless.
          </P>
        </li>
        <li>
          <P>Tabletop Role-playing Games</P>
          <P>
            I run and play in a few different TTRPGs. I especially like to play
            with the Old-School Essentials system as old school role-playing is
            my cup of tea.
          </P>
        </li>
        <li>
          <P>Photography</P>
          <P>
            I have been dabbling with astro-photography lately, and I have a
            somewhat jury-rigged setup at the moment. I also enjoy macro
            photography, and landscape photography with churches, rivers, the
            odd goose.
          </P>
          <Gallery
            images={[
              {
                src: "/photography-portfolio/geese.jpg",
                alt: "A picture of 2 geese on a river.",
              },
              {
                src: "/photography-portfolio/swan.jpg",
                alt: "A picture of a swan and a cygnet on a river.",
              },
              {
                src: "/photography-portfolio/lizard.jpg",
                alt: "A close-up of a lizard's face.",
              },
              {
                src: "/photography-portfolio/beee.jpeg",
                alt: "A close-up of a bumble bee next to some lavinder.",
              },
              {
                src: "/photography-portfolio/chester_cathedral.jpg",
                alt: "A picture of the interior of Chester Cathedral, where you can see across thentire building.",
              },
            ]}
          />
        </li>
      </ul>
    </>
  );
}
