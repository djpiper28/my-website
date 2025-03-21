interface Props {
  children: string;
}

export function H2(props: Readonly<Props>) {
  return <h2 className="text-2xl">{props.children}</h2>
}
