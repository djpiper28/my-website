import { H1 } from "@/components/typrography/H1";
import { H2 } from "@/components/typrography/H2";
import { H3 } from "@/components/typrography/H3";
import { Link } from "@/components/typrography/Link";
import { P } from "@/components/typrography/P";

export default function Page() {
  return (
    <>
      <H1>Age Checking on Websites</H1>
      <P>
        Recently, the UK government has passed the{" "}
        <Link href="https://www.legislation.gov.uk/ukpga/2023/50/contents">
          Online Safety Act 2023
        </Link>
        , which has done a lot of things - many good, some potentially bad. It
        is undeniable that the need for this legislation is very real as social
        media has led to the unfortunate suicide of children and teenagers from
        the exposure to harmful content. One part of this that has been worrying
        privacy advocates is about age verification, particularily if it
        involves sending your ID, or face scans to a provider. One majour
        concern is that this identifiable information will be exploited by the
        website that you visit, this threat is mainly present on porn websites -
        where the threat is most menacing. For instance a bad actor could your
        ones preffered taste in smut to blackmail or berate people, or they
        could commit identity theft.
      </P>
      <H2>Risks of A Privacy Poor Age Verification Process</H2>
      <P>
        I think that there are four main threats of a poorly implemented age
        verification process: fraud, attacks and othe real world harm, tracking,
        and sending users to a darker place.
      </P>
      <H3>Fraud</H3>
      <P>
        This is a fairly simple threat to understand. A dodgey website asks
        users to scan their drivers licence or other type of document to access
        its content, this data is then used to open bank accounts or similar.
      </P>
      <H3>Attacks And Other Real World Harm</H3>
      <P>
        I have made this category deliberately vague, it is meant to refer to
        blackmail, chracter assassinations, and other such things that could
        occur if attackers had knowledge of content that you were watching. This
        data could very well become public (or sold on the dark web) if there
        was a cyber attack that stole it. Things that I would compare this
        threat to is wire tapping, (think of Prince Harry and the tabloids,{" "}
        <Link href="https://www.bbc.co.uk/news/uk-67122719">
          See BBC reporting
        </Link>
        , or{" "}
        <Link href="https://www.dailymail.co.uk/news/article-14312499/Duke-Sussex-settles-High-Court-claim-against-News-Group-Newspapers.html">
          Daily Mail reporting
        </Link>
        ). A larger threat is to those who are from sexually conservative
        backgrounds or countries, such as certain Muslims where this data could
        lead to imprisonment, and all of the horrors that would follow.
      </P>
      <H3>Tracking</H3>
      <P>
        Age verification could very much assist in connecting peoples activies
        across different sites and allow states (and companies) to track users
        with far greater granularity. One of the fears is that this will connect
        cookies in private browsing tabs back to the identity of the main
        browser.
      </P>
      <H3>Sending Users To A Darker Place</H3>
      <P>
        One of the risks of age restrictions on porn websites is users going to
        alternative websites that do not follow the regulations. These will
        likely be foreign websites that do not respond to regulators, and they
        will likely have more advertising (with less vetting) and have
        unregulated content. It is likely that users who go to darker sites
        would be supporting the abuse of their actors.
      </P>
      <P>
        Another risk of users using these bad websites is that they may be
        likely for phising and scamming, perhaps by signing up to these sites.
      </P>
      <P>
        Usage of these sites is likely avoidable if search engine and social
        media companies companies take the actions that they should be required
        to by deleting the content.
      </P>
      <H2>Bypassing Age Verification</H2>
      <P>
        Another cause of concern around the regulation is how easy it will be to
        bypass, ways to do this include VPNs, and deep faked cameras. On the VPN
        front, whilst this may seem like a real issue (see Proton VPN
        subscription increases after the ban in France{" "}
        <Link href="https://mashable.com/article/proton-vpn-pornhub-france">
          Mashable reporting
        </Link>
        ), it is important to note that children and teenagers do not typically
        have enough money to get a VPN to access this content, furthermore most
        likely do not know what a VPN is. Like VPNs fake cameras for fake faces
        is something that is most likely out of reach of children and teenagers
        so not something to worry about. What is alarming though is that people
        who are old enough to legally watch porn are not educated enough to use
        VPNs, fake cameras, or similar bypasses - therefore they their data will
        be at risk.
      </P>
      <P>
        Overall I do not think that there is much of a risk of children and
        teenagers bypassing age restrictions to access that they should not be
        allowed to. I would also add that illegal online gambling is likely to
        have a similar risk profile, and the age verification there is a prime
        of example of great legislation.
      </P>
      <H2>Security Issues</H2>
      <H3>Effects of A Data Breach</H3>
      <P>
        As I have already stated any data that is stolen can cause a lot of harm
        to the victims. Given that most porn sites use pre-historic technology,
        i.e: PornHub with PHP, I would not trust them with my ID, hence I
        support PornHub&apos;s call for the data to be handled by trusted
        identity providers. A good way to avoid any security attacks is not to
        store the data. If the age verification where transient and setup in a
        way to not share identitiable documents then the risk can be entirely
        mitigated. However the ID provider would still have a risk of documents
        being stolen if they were to retain them. I will go into detail later
        about what an ideal solution would like.
      </P>
      <H3>Potential For Phising Attacks</H3>
      <P>
        This is, in my opinion, the largest threat of poorly implemented age
        checks. I can see the attack working as follows:
        <ol className="list-decimal">
          <li>A user goes to a malicious site</li>
          <li>
            They are informed that they need to verify their age to access the
            content
          </li>
          <li>
            The user is taken to a page that looks official asks for valid ID
          </li>
          <li>The user then submits their ID to a malicious website</li>
          <li>
            They then get access to the their content and are not aware they
            have been scammed
          </li>
        </ol>
      </P>
      <P>
        The reprecussions of this type are attack would be very severe, ranging
        from blackmail, to fraud. It is likely that such an attack will cause
        finanical harm, and potentially even physical harm.
      </P>
      <P>
        Like most phising attacks this can be avoided by good policies (on the
        identity providers), and education. It would be wise for regulators to
        make adverts about the potential for phising.
      </P>
      <H2>Conclusion</H2>
      TODO: check that YOTI or similar apps do not provide information, and
      attach a diagram and explanation of how any solution should work.
      <H2>Use of AI Disclaimer</H2>
      <P>
        No AI was used to generate text that appears on this website, however
        Google Gemini was used to help read the legalese that is the act in
        question.
      </P>
      <P>
        This content cannot be used to train AI, putting this article into some
        AI providers will use it as training material so I would avoid doing so.
      </P>
    </>
  );
}
