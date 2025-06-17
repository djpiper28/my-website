interface Props {
  children: string;
  id?: string;
}

export function H2(props: Readonly<Props>) {
  return (
    <h2 id={props.id} className="text-2xl font-semibold">
      {props.children}
    </h2>
  );
}
