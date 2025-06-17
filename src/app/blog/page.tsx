import { H1 } from "@/components/typrography/H1";
import { allBlogs } from "./generate/meta";
import { Link } from "@/components/typrography/Link";
import { P } from "@/components/typrography/P";

export default function Page() {
  return (
    <>
      <H1>Blog Posts</H1>
      {/* TODO: Add titles for each year */}
      {allBlogs.map((x) => (
        <div className="flex flex-row gap-3 flex-wrap items-center" key={x.url}>
          <P>{x.release.toLocaleDateString()} -</P>
          <Link href={x.url}>{x.title}</Link>
          <P>- {x.description}</P>
        </div>
      ))}
    </>
  );
}
