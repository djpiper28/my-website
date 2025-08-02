import { DiagramBox } from "@/components/containers/diagramBox";
import { H1 } from "@/components/typrography/H1";
import { Link } from "@/components/typrography/Link";
import { P } from "@/components/typrography/P";
import Image from "next/image";

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
        <Image
          src="/self-hosting/self-hosting.drawio.svg"
          alt="Self hosting diagram of the setup of the network"
        />
      </DiagramBox>
      <P>
        All of my services, that are within Kubernetes, use Helm to create the
        Kubernetes configuration files. Since I only have one node it makes the
        ingress a lot easier. I have setup a master ingress server that reverse
        proxies requests to the relevants services and handles TLS/SSL.
        Interestingly, this setup makes routing UDP and TCP requests to the same
        destination port a lot easier (this is done to get my Garry&apos;s Mod
        server working).
      </P>
      <P>
        To keep my internal services secure I have setup{" "}
        <Link href="https://github.com/vouch/vouch-proxy">Vouch Proxy</Link> to
        authenticate requests with my Github account. This has proven to work
        quite well and was fairly easy to setup.
      </P>
      <P>
        Updating these applications, and configurations is done with a Jenkins
        pipeline for each service. Most of these jobs build a Docker image, then
        publish and install a Helm package to the cluster. I have found that
        this makes tracking what versions of software are deployed a lot easier
        as I can look at the latest build and get all of the data.
      </P>
      <DiagramBox>
        <Image
          src="/self-hosting/jenkins.png"
          alt="A picture of a Jenkins dashboard"
          width={1000}
          height={500}
        />
      </DiagramBox>
      <P>
        To keep an eye on all of my services I have setup Grafana. There are
        lots of Grafana dashboards that show lots of things. Most of them are
        not that useful but the graphs are pretty.
      </P>
      <DiagramBox>
        <Image
          src="/self-hosting/grafana.png"
          alt="A picture of a Grafana dashboard"
          width={1000}
          height={500}
        />
      </DiagramBox>
    </>
  );
}
