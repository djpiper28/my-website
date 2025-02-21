import { githubUrl } from "@/consts";
import { Link } from "../typrography/Link";

export function Footer() {
  return (
    <footer className="flex flex-col md:px-10 p-2 bg-slate-300">
      <p>
        Danny Piper 2025, Unlicense,{" "}
        <Link href={githubUrl + "/my-website"}>Source Code</Link>
      </p>
      <p>
        My <Link href={githubUrl}>Github</Link>
      </p>
      <p>
        <Link href={"/contact-me"}>Contact me</Link>
      </p>
    </footer>
  );
}
