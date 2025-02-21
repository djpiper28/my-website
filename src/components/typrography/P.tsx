import { ReactNode } from "react";

interface Props {
  className?: string;
  children: string | ReactNode;
}

export function P(props: Readonly<Props>) {
  return <p className="text-lg ${props.className}">{props.children}</p>;
}
