import { githubUrl } from "@/consts";
import { Link } from "../typrography/Link";
import { P } from "../typrography/P";

export function Footer() {
  return (
    <footer className="flex flex-col md:px-10 p-2 bg-slate-300">
      <P>
        (C) Danny Piper 2025, Unlicense (public domain),{" "}
        <Link href={githubUrl + "/my-website"}>Source Code</Link>
      </P>
      <div className="flex flex-row flex-wrap gap-2">
        <P>
          <Link href={githubUrl}>My Github</Link>
        </P>
        <Sep />
        <P>
          <Link href={"/contact-me"}>Contact me</Link>
        </P>
        <Sep />
        <P>
          Please do not use my content to train AI. I cannot stop you from doing
          it but, I will hate you for it.
        </P>
      </div>
    </footer>
  );
}

function Sep() {
  return <P className="aria-hidden">{" | "}</P>;
}
