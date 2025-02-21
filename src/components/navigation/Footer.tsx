import { githubUrl } from "@/consts";
import { Link } from "../typrography/Link";
import { P } from "../typrography/P";

export function Footer() {
  return (
    <footer className="flex flex-col md:px-10 p-2 bg-slate-300">
      <p>
        (C) Danny Piper 2025, Unlicense,{" "}
        <Link href={githubUrl + "/my-website"}>Source Code</Link>
      </p>
      <div className="flex flex-row flex-wrap gap-2">
        <p>
          <Link href={githubUrl}>My Github</Link>
        </p>
        <Sep />
        <p>
          <Link href={"/contact-me"}>Contact me</Link>
        </p>
      </div>
    </footer>
  );
}

function Sep() {
  return <P className="aria-hidden">{" | "}</P>;
}
