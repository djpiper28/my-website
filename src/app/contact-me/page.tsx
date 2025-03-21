import { H1 } from "@/components/typrography/H1";
import { P } from "@/components/typrography/P";
import { Link } from "@/components/typrography/Link";
import { githubUrl } from "@/consts";

export default function Page() {
  return (
    <>
      <H1>Contacing me</H1>
      <P>
        Please be respectful when you contact me. That means -{" "}
        <span className="font-bold">don&apos;t be a dick.</span>
      </P>
      <ul className="list-disc">
        <li>
          <P>
            Email:{" "}
            <Link href="mailto://djpiper28+website@gmail.com">
              djpiper28@gmail.com
            </Link>
          </P>
        </li>
        <li>
          <P>
            Github: <Link href={githubUrl}>djpiper28</Link>
          </P>
        </li>
        <li>
          <P>
            Devpost:{" "}
            <Link href={"https://devpost.com/djpiper28"}>djpiper28</Link>
          </P>
        </li>
        <li>
          <P>LinkedIn: deleted</P>
        </li>
      </ul>
      <P>
        I have a limited amount of social media, many of which I wish to close
        down. I do not like social media and do not want to use it.
      </P>
    </>
  );
}
