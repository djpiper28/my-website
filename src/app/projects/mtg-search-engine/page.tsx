import { H1 } from "@/components/typrography/H1";
import { H2 } from "@/components/typrography/H2";
import { H3 } from "@/components/typrography/H3";
import { Link } from "@/components/typrography/Link";
import { P } from "@/components/typrography/P";

export default function Page() {
  return (
    <>
      <H1>MTG Search Engine</H1>
      <P>
        A search engine based on{" "}
        <Link href="https://scryfall.com/">Scryfall</Link>, written in C, with a
        NextJS frontend. You can see the website on{" "}
        <Link href="https://monarch.djpiper28.co.uk/">
          monarch.djpiper28.co.uk
        </Link>
        . The source code is available on{" "}
        <Link href="https://github.com/SquireTournamentServices/mtg-search-engine">
          Github
        </Link>
        .
      </P>
      <H2>A Brief Overview of How It Works</H2>
      <H3>Interpreting User Input</H3>
      <P>
        The parser is written as a PEG and generated with{" "}
        <Link href="https://github.com/arithy/packcc">packcc</Link>. An abstract
        syntax tree is created during the parse of the input string. After this
        the tree is then optimised, and interpreted. Below is a diagram of the
        process. (The diagram is also available as a{" "}
        <Link href="/projects/mtg-search-engine/interpreter.drawio">
          drawio diagram
        </Link>
        ).
      </P>
      <div className="flex justify-center w-full p-5">
        <img
          src="/projects/mtg-search-engine/interpreter.drawio.svg"
          alt="Diagram of the interpreter"
          className="md:w-1/2 border-slate-300 p-5 border-2"
        />
      </div>
      <P>
        The above example generates two sets to start with: the set of all cards
        printed in M19, and the set of all cards that are legal in commander.
        The &quot;and&quot; operator preforms a set intersection, generating a
        third set. The regex of cards matching /goblin .*/ is then performed on
        each card in the intersection set.
      </P>
      <H3>Indexes</H3>
      <P>
        There are a lot of indexes generated to make lookups faster. Many set
        generators, such as &quot;power&gt;5&quot;, are O(1) complexity. A
        &quot;normal&quot; index is a balanced binary tree (implemented as AVL
        trees) that stores the data in order. For the power of a magic card,
        this allows for one index for all operators (&gt;, &lt; &gt;=, &lt;=, =,
        :).
      </P>
      <P>
        Some indexes are a bit different, for example, the &quot;set:m19&quot;
        index is a pre-computed set of all cards printed in M19. Another special
        index type is a trie tree for textual lookups (i.e:
        &quot;name:goblin&quot;).
      </P>
      <P>
        Most things that can be pre-computed are, leading to about 2.4GiB of
        memory usage (this number will probably change). For things that cannot
        be pre-computed, namely regex lookups, optimisations are used to allow
        the regex matching to be executed against as few cards as possible.
      </P>
      <H3>Other Cool Technical Things</H3>
      <P>
        Quite a lot of the code is to make the application multi-threaded,
        implemented as a light-thread system where tasks are submitted to a task
        queue that is consumed by threads in a pool. The web server that is used
        to serve data to the frontend uses an async pattern, the job is
        submitted to the task pool and the server thread polls for completion on
        all pending queries.
      </P>
      <P>
        The hosted environment is self-hosted by me and runs in my Kubernetes
        cluster, and has its cards updated weekly. The search engine is also
        embeddable and can be used in other projects as a library. The hosted
        version has a Go API client, and an Open API definition so it can be
        used in your projects if you want to.
      </P>
      <P>
        There is a lot of testing setup for the project, about 80% coverage,
        with unit tests, system tests, memory tests, and integration tests.
      </P>
    </>
  );
}
