import { ReactNode } from "react";
import NextLink from "next/link";

interface Props {
  href: string;
  children: ReactNode;
}

export function Link(props: Readonly<Props>) {
  return (
    <NextLink href={props.href} className="text-blue-700 hover:text-blue-600 underline">
      {props.children}
    </NextLink>
  );
}
