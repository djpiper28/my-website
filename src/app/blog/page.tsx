import { H1 } from "@/components/typrography/H1";
import { allBlogs } from "./generate/meta";
import { Link } from "@/components/typrography/Link";
import { P } from "@/components/typrography/P";
import { H2 } from "@/components/typrography/H2";

export default function Page() {
  const seenYears: number[] = [];
  return (
    <>
      <H1>Blog Posts</H1>
      {allBlogs.map((x) => {
        const showYear = !seenYears.find(
          (year) => year === x.release.getFullYear(),
        );
        if (showYear) {
          seenYears.push(x.release.getFullYear());
        }

        return (
          <>
            {showYear ? (
              <H2>{`Posts of ${x.release.getFullYear()}`}</H2>
            ) : (
              <></>
            )}
            <div
              className="flex flex-row gap-3 flex-wrap items-center"
              key={x.url}
            >
              <P>{x.release.toLocaleDateString()} -</P>
              <Link href={x.url}>{x.title}</Link>
              <P>- {x.description}</P>
            </div>
          </>
        );
      })}
    </>
  );
}
