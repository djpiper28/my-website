import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex flex-row p-2 bg-slate-600">
      <Link href="/" prefetch={true}>
        <h2 className="font-bold text-2xl">djpiper28.co.uk</h2>
      </Link>
    </nav>
  );
}
