interface Props {
  children: string;
}

export function H3(props: Readonly<Props>) {
  return <h3 className="text-xl font-semibold">{props.children}</h3>
}
