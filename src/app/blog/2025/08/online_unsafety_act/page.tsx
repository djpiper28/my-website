import { H1 } from "@/components/typrography/H1";
import { H2 } from "@/components/typrography/H2";
import { Link } from "@/components/typrography/Link";
import { P } from "@/components/typrography/P";
import { meta } from "./meta";

export default function Page() {
  return (
    <>
      <H1>{meta.title}</H1>
      <P>{meta.description}</P>
      <H2>
        Let&apos;s Accuse Critics Of The Bill Of Being On The Side Of Jimmy
        Saville, And Threats To Ban VPNs
      </H2>
      <P>
        This is one of the most idiotic things an MP has ever said. VPNs keep
        people safe by keeping their traffic encrypted and helps to mask your
        identity is used correctly. Jimmy Saville on the other hand was a
        prolific paedophile, who abused children physically. Like Saville Most
        people want their private life public. It is not because they have
        paedophillia to hide, it is because they like to keep things private.
        Also the &quot;nothing to hide nothing to fear&quot; expression is
        bollocks.
      </P>
      <P>
        It is quite important for people to realise that realise that most VPN
        users are not using them for cyber crime, and cyber criminals don&apos;t
        care about the law and any potential bans - they will bypass whatever
        you try. They will use Tor, bullet proof hosting, SSH tunnels on random
        servers, etc... These tools are vital for journalists, dissodents (not
        just of foreign states), targets for cyber crime, and those who want to
        use services from their own country.
      </P>
      <P>
        Overall I think that threating VPNs and encryption for the sake of
        children is a suicidal policy that weakens the security position of a
        country to allow a few paranoid politicians to convince themselves that
        the country won&apos;t rebel against them. You know what it makes them
        more likely.
      </P>
      <H2>Apple vs The UK Government</H2>
      <P>
        Recently{" "}
        <Link href="https://www.bbc.co.uk/news/articles/c20g288yldko">
          Apple has been suring the UK Government
        </Link>{" "}
        over rights to user&apos;s encrypted data. This is alarming for a lot of
        reasons, namely they want to add a backdoor to read user data. Any, and
        all backdoors can be used by potential attackers, such as the Russian,
        Chinese, Iranians, and North Korean&apos;s that our Government seems so
        scared of. Not to mention it takes one jaded employee who added a back
        door and suddenly the data is as secure as a bike tied to a fence by a
        canal (that is then stolen by a set of blokes and the police cannot be
        arsed to do anything about it).
      </P>
      <P>
        In a more serious tone, threats against encryption will make cyber
        attacks more common, and user data less secure. Especially if the user
        data is identity documents, and credit card information to verify
        people&apos;s ages. This will lead to more identity fraud. Identity
        fraud being the chosen charge for people who submit fake data to age
        verification checks. Upload a Lego Land driving license and get a fraud
        conviction (hopefully this remains a sarcasm).
      </P>
      <H2>Conclusion</H2>
      <P>
        The Government are fucking wankers who think that bog standard crooks
        are terrorists; take half my income in tax yet can&apos;t fix a pissing
        pot hole; and Kier Starmer is a miserable bastard who should just piss
        off. This combined with the continued authoriatian creep, the upcoming
        respect orders, and other such nonesense makes freedom feel under
        threat.
      </P>
    </>
  );
}
