import { DiagramBox } from "@/components/containers/diagramBox";
import { H1 } from "@/components/typrography/H1";
import { Link } from "@/components/typrography/Link";
import { P } from "@/components/typrography/P";

export default function Page() {
  return (
    <>
      <H1>Self Hosting and Home Lab</H1>
      <P>
        I have spent a lot of time with my home lab setup to experiment with
        Kubernetes, and Grafana. I use a set of private Github repos to store my
        configuration for all of my services.{" "}
        <Link href="https://www.jenkins.io/">Jenkins</Link> deploys any changes
        to my cluster when they are committed to my git repos. I have spent a
        lot of time tinkering with the setup to try to make it do the things I
        want it to do and think I have done a decent job.
      </P>
      <P>
        The server that hosts the Kubernetes cluster also has a PostgreSQL
        database, Grafana, Jenkins, Prometheus, and Nginx ingress server.
      </P>
      <DiagramBox>
        <img
          src="/self-hosting/self-hosting.drawio.svg"
          alt="Diagram of the interpreter"
          className="md:w-1/4 border-slate-300 p-5 border-2"
        />
      </DiagramBox>
    </>
  );
}
