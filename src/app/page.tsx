import { Gallery } from "@/components/photography/gallery";
import { H1 } from "@/components/typrography/H1";
import { H2 } from "@/components/typrography/H2";
import { P } from "@/components/typrography/P";
import { Language, Project } from "./project";
import { githubUrl } from "@/consts";
import { Link } from "@/components/typrography/Link";
import { H3 } from "@/components/typrography/H3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row-reverse md:flex-row flex-wrap md:flex-nowrap justify-between gap-5">
        <div>
          <H1>Hello World!</H1>
          <P>
            Hello World! I am Danny Piper, a Software Engineer working at
            Motorola Solutions, with an interest in solving complex problems
            with software. I also dabble with hardware, radios, and any other
            device that I can hack.
          </P>
          <P>
            I graduated with a diploma of higher education from Royal Holloway
            University of London in 2023.
          </P>
          <H2>My Personal Projects</H2>
          <P>
            Here is a selection of my favourite projects, all of my projects can
            be found on my <Link href={githubUrl}>Github Page</Link>
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
            <li>
              <div className="flex flex-row flex-wrap gap-5">
                <Link href="https://www.royalhackaway.co.uk/">
                  <H3>Royal Hackaway v5-v8</H3>
                </Link>
                <P>
                  A student led hacakathon at the univeristy I attended - Royal
                  Holloway. I helped organise v5 and v6 directly, and helped at
                  v7 and v8. During v5 and v6 I wokred mostly on the
                  live-streaming aspect of the hybrid event which was moderately
                  stressful. During v7 and v8 I did most of the photography.
                  <p className="text-sm">
                    Although do to a &quot;Mass Ass Chew Sets&quot; incident I
                    will be avoiding MLH like the plague. For the reasons of not
                    being done for libel I won&apos;t add much more to this.
                  </p>
                </P>
              </div>
            </li>
          </ul>
        </div>
        <Image
          src="/me.jpg"
          alt="A picture of me, if you are visually impaired rest assured that I look good."
          className="aspect-square object-cover"
          width={400}
          height={300}
        />
      </div>
      <H2>My Hobbies And Interests</H2>
      <ul className="list-disc">
        <li>
          <P>Programming</P>
          <P>
            I enjoy programming in Go, C, C++, and Rust. However I do tinker
            with many other languages and tools. I have written some fun
            projects with my friends from{" "}
            <Link href="https://pilk.uk/">Pilksoft Interactive On-Line</Link>.
            (Pilksoft is a just an umbrella term for a group of alumni from the
            university I attended).
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
      <H2>My Professional Projects</H2>
      <P>
        I will put this here for recruiters to look at, although they should
        note that I am not looking for a job right now as I quite pleased with
        my current job.
      </P>
      <H3>Motorola Solutions (late 2024-now)</H3>
      <P>
        I have been doing some very interesting work on the backend of a
        security camera system. Fun things include testing various AI providers
        and comparing the outputs. I would love to say more about this exciting
        job but I don&apos;t think I can.
      </P>
      <H3>BJSS (mid 2023- late 2024)</H3>
      <P>
        At BJSS I worked on a website for a regulatory body that was written in{" "}
        {Language.NextJs}, {Language.Typescript}, and {Language.CSharp}. The
        software was deployed in Kubernetes, and had a micro-service
        architecture. I wrote a{" "}
        <Link href="https://docs.docker.com/compose/">Docker compose file</Link>{" "}
        to host all of the services locally. There were about 22 containers (it
        was wild). Here are some of the containers.
      </P>
      <ol className="list-decimal flex flex-row flex-wrap gap-x-10">
        <li>PostgreSQL</li>
        <li>Redis</li>
        <li>New platform webapp</li>
        <li>Old platform</li>
        <li>Old background job runner</li>
        <li>Old admin portal</li>
        <li>New admin portal</li>
        <li>Auth service</li>
        <li>API that talks to the old database</li>
        <li>API that talks to MS Dynamics</li>
        <li>Wiremock (this software is so jank)</li>
        <li>Documentation site</li>
      </ol>
    </>
  );
}
