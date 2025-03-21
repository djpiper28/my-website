import { H1 } from "@/components/typrography/H1";
import { H2 } from "@/components/typrography/H2";
import { P } from "@/components/typrography/P";

export default function Home() {
  return (
    <>
      <H1>Hello World!</H1>
      <P>
        Hello World! I am Danny Piper, a Software Engineer working at Motorola
        Solutions, with an interest in solving complex problems with software.
      </P>
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
        </li>
      </ul>
    </>
  );
}
