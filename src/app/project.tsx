import { H3 } from "@/components/typrography/H3";
import { Link } from "@/components/typrography/Link";
import { P } from "@/components/typrography/P";

export enum Language {
  Typescript = "Typescript",
  NextJs = "NextJS",
  Rust = "Rust",
  C = "C",
  Cpp = "C++",
  Go = "Go",
  CSharp = "C#",
  Cmake = "Cmake",
  Proto = "Protocol Buffers",
  Python = "Python",
}

interface Props {
  repoUrl: string;
  name: string;
  description: string;
  languages: Language[];
  internalUrl?: string;
}

export function Project(props: Readonly<Props>) {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-3">
        <Link href={props.internalUrl ?? props.repoUrl}>
          <H3>{props.name}</H3>
        </Link>
        <P>{props.description}</P>
        <P>Written in: {props.languages.join(", ")}</P>
      </div>
      {props.internalUrl && (
        <P>
          <Link href={props.internalUrl}>More Info</Link>
        </P>
      )}
    </>
  );
}
