import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-between items-center p-2 md:px-10 bg-slate-300">
      <Link href="/" prefetch={true}>
        <h2 className="font-bold text-2xl">djpiper28.co.uk</h2>
      </Link>

      <Link href="/blog" prefetch={true}>
        <h2 className="font-bold text-xl">blog</h2>
      </Link>
    </nav>
  );
}
