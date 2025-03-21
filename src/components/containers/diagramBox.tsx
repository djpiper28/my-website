import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function DiagramBox(props: Readonly<Props>) {
  return (
    <div className="flex justify-center">
      <div className="p-5 border-slate-300 border-2">{props.children}</div>
    </div>
  );
}
