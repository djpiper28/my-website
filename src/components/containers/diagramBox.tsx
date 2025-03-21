import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function DiagramBox(props: Readonly<Props>) {
  return <div className="flex justify-center w-full p-5">{props.children}</div>;
}
