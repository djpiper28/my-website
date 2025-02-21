import { githubUrl } from "@/consts";
import Link from "next/link";

export function Footer() {
  return <footer className="flex flex-col p-2 bg-slate-600">
    <Link href={githubUrl}>Github</Link>
  </footer>
}
