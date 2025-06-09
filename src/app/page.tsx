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
                description="A search engine for 'Magic: The Gathering' that has a syntax similar to Scryfall. It uses lots of indexes, and algorithms to help make it lightning fast."
                repoUrl="https://github.com/djpiper28/mtg-search-engine"
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
                description="A (now defunct) bot that helped to run tournaments for 'Magic: The Gathering' during The Covid Pandemic. During its use it helped to run many tournaments with up to 100ish players. Since then the need for it has disappeared as in person play has resumed."
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
                description="An Incremental JSON Parser library for Rust, that allows for fast memory efficient parsing of large JSON files. (Under development, when I finish it I will add more info). When I finish it I intend to use it with my MTG Search Engine to accelerate the processing of the MTG JSON data source."
                repoUrl="https://github.com/djpiper28/inc-json-rs"
                languages={[Language.Rust]}
              />
            </li>
            <li>
              <Project
                name="UEFI hacking Game"
                description="A game you can play on your PC in UEFI mode that is inspired by the Fallout hacking mini-game. This was made by a good friend and I as part of a one day game jam. An event judge decided to set the game as his boot device and was so bad at the game he was unable to boot his device."
                repoUrl="https://github.com/pilksoc/uefi-hacking-game"
                languages={[Language.C]}
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
            my cup of tea. To help with running these games I am in the early
            stages of creating a tool to manage characters, locations, and
            factions which will use graphs to help sort data.
          </P>
        </li>
        <li>
          <P>Photography</P>
          <P>
            I have been dabbling with astro-photography lately, and I have a
            somewhat jury-rigged setup at the moment. Howver, as you would
            expect for a Brit, I have had nothing but clouds and rain when I
            have tried to use my equipment. I also enjoy macro photography, and
            landscape photography with churches, rivers, the odd goose. I have
            been using GIMP and Siril for the post-processing of the images that
            I have taken and found it very stress relieving.
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
        security camera system. This includes writing Go, database migrations,
        working with video, and Fun things include testing various AI providers
        and comparing the outputs. I would love to say more about this exciting
        job but I don&apos;t think I can.
      </P>
      <H3>BJSS (mid 2023- late 2024)</H3>
      <P>
        Upon joining the company I underwent their internal training program
        &quot;BJSS Academy&quot; which was fantastic. I would go as far to
        recommend it to any people wishing to break into the industry. From
        completing this program I got a City and Guilds certificate.
      </P>
      <P>
        After the training I worked on a website for a regulatory body that was
        written in {Language.NextJs}, {Language.Typescript}, and{" "}
        {Language.CSharp}. The software was deployed in Kubernetes, and had a
        micro-service architecture. I wrote a{" "}
        <Link href="https://docs.docker.com/compose/">Docker compose file</Link>{" "}
        to host all of the services locally. There were about 22 containers (it
        was wild). Here are some of the containers. Not all are listed as many
        where the same container with different configurations to mimic
        different environments.
      </P>
      <ol className="list-disc flex flex-row flex-wrap gap-x-10">
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
      <P>
        Whilst working in this role, I took an active involvement in the testing
        and planning of the project.
      </P>
      <H3>Arcio (2022)</H3>
      <P>
        Arcio is a now defunct startup that I worked on with some of my
        university friends. It aimed at simplying online education tools.
        However the industry is notoriously hard to penetrate and our project
        was not able to go anywhere. It was a very interesting project though. I
        learnt a lot about databases at scale, micro-services, and team work.
        You can find our source code on{" "}
        <Link href="https://github.com/arcio-uk">Github</Link>.
      </P>
      <H3>IBM (2018)</H3>
      <P>
        For one week in 2018, when I was about 16 years old, I did some work
        experience in Hursely. it was great fun I had my own laptop, my own
        email, my own keycard - all you want when you are 16. I did some work
        with a mentor on the testing of ZOS (a mainframe operating system),
        notablly a code scanner to detect things that are not compliant. That
        being said it was not a linter, it just searched for strings such as
        &quot;object code only&quot;, and the other forms it may appear in. I
        got to look at the datacenter and see all of the mainframes. It was very
        inspiring as a young boy.
      </P>
    </>
  );
}
