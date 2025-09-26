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
            <div className="flex flex-row gap-3" key={x.url}>
              <P className="w-max">{x.release.toLocaleDateString()}</P>
              <Link className="w-max" href={x.url}>
                {x.title}
              </Link>
              <P className="text-wrap">{x.description}</P>
            </div>
          </>
        );
      })}
    </>
  );
}
