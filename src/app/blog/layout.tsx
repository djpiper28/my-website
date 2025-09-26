import type { Metadata } from "next";
import { ReactNode } from "react";
import { P } from "@/components/typrography/P";

export const metadata: Metadata = {
  title: "Blogs @ djpiper28.co.uk",
  description: "Contains all of Danny's blog posts.",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <div className="flex flex-col gap-2 px-2 md:px-5 lg:px-10 xl:px-40 2xl:px-52">
      {children}
      <P className="py-1 border-t-2 border-gray-300">
        All opinions expressed are those of Danny Piper, sometimes he might make
        a joke or do a satire.
      </P>
    </div>
  );
}
