import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title:
    "PoliAlerts Features | Real-Time Government Monitoring for Canada",
  description:
    "Live session transcription, keyword alerts, AI briefings, document intelligence, media monitoring, government contacts, and lobbying data — all in one platform covering federal, provincial, and municipal government across Canada.",
};

export default function FeaturesPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/PoliAlerts/assets/features/skyscraper-windows-at-night.png"
        mobileImage="/PoliAlerts/assets/mobile-banners/polialerts-features-mobile-banner.jpg"
        subtitle="PLATFORM"
        title="Everything you need to monitor Canadian government"
      />

      {/* Module 1: Live Session Monitoring & Alerts */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Live session monitoring and alerts
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-6">
          PoliAlerts transcribes legislative sessions, committee hearings, and
          press conferences in real time. When a keyword you care about is spoken
          or published, you get an alert — typically within 60 seconds.
        </p>
        <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
          <li>
            Real-time speech-to-text transcription across the House of Commons,
            provincial legislatures, committee rooms, and government YouTube streams
          </li>
          <li>
            Keyword alerts within 60 seconds of a word or phrase being spoken or
            published in a scraped document
          </li>
          <li>
            Configurable per channel: choose real-time alerts, a daily digest, or
            no notifications
          </li>
          <li>
            12+ federal committee rooms monitored simultaneously, plus Ontario
            legislature, Quebec National Assembly, and more
          </li>
          <li>
            Filter alerts by jurisdiction so you only see what matters to your
            regions
          </li>
        </ul>
      </section>

      {/* Module 2: AI Briefings */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16 bg-background-light-gray">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          AI briefings
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-6">
          Every morning, PoliAlerts reads everything that happened yesterday across
          your selected regions — transcripts, documents, press releases — and
          writes you a personalized briefing. It tells you what changed overnight
          and suggests new topics you should be watching.
        </p>
        <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
          <li>
            Personalized daily briefings based on your interests and selected
            jurisdictions
          </li>
          <li>
            Reads all activity from the previous day: sessions, filings, press
            releases, regulatory changes
          </li>
          <li>
            Suggests new topics you may want to add to your watch list
          </li>
          <li>
            Configurable frequency, tone, delivery time, and timezone
          </li>
          <li>
            Delivered via email and viewable in the dashboard
          </li>
        </ul>
      </section>

      {/* Module 3: Document Intelligence */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Document intelligence
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-6">
          45+ automated scrapers run across 7 jurisdictions on schedules as
          frequent as every 5 minutes. Press releases, bills, gazettes, regulatory
          filings, consultations, Orders in Council — all captured, indexed, and
          matched against your keywords automatically.
        </p>
        <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
          <li>
            45+ scrapers covering federal, Ontario, Quebec, British Columbia,
            Alberta, Toronto, and York Region
          </li>
          <li>
            High-priority sources like canada.ca and news.ontario.ca checked every
            5 minutes
          </li>
          <li>
            Covers press releases, bills, gazettes, regulatory registry filings,
            environmental registry postings, consultations, and Orders in Council
          </li>
          <li>
            Every document is deduplicated, indexed for full-text search, and run
            through keyword matching
          </li>
        </ul>
      </section>

      {/* Module 4: Media Monitoring */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16 bg-background-light-gray">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Media monitoring
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-6">
          Track Canadian news coverage across 22+ outlets. See which reporters are
          covering your issues, who they are quoting, and how stories spread across
          the media landscape.
        </p>
        <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
          <li>
            22+ Canadian news outlets tracked with articles searchable by outlet,
            topic, region, and article type
          </li>
          <li>
            2,000+ reporter profiles with beat tracking, outlet history, and
            contact information
          </li>
          <li>
            Topic tracking across 45 categories with daily volume charts and
            trending entities
          </li>
          <li>
            Story clusters that group related articles across outlets so you can
            see coverage breadth at a glance
          </li>
          <li>
            Wire detection distinguishes original reporting from republished wire
            service content
          </li>
          <li>
            Entity tracking shows who is being mentioned, quoted, and covered —
            and by whom
          </li>
        </ul>
      </section>

      {/* Module 5: Government Contacts */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Government contacts
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-6">
          An updated database of Canadian government officials with direct contact
          information — MPs, Senators, provincial legislators, political staff, and
          ministerial offices.
        </p>
        <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
          <li>
            Email, phone, and social media profiles for elected officials and
            political staff
          </li>
          <li>
            Searchable and filterable by party, riding, chamber, and institution
          </li>
          <li>
            Sourced from official parliamentary rosters and refreshed regularly
          </li>
          <li>
            Integrated into enriched person profiles alongside lobbying and ethics
            data
          </li>
        </ul>
      </section>

      {/* Module 6: Lobbying & Stakeholder Intelligence */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16 bg-background-light-gray">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Lobbying and stakeholder intelligence
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-6">
          See who is lobbying whom, on what subjects, and how the stakeholder
          landscape around any topic is structured. Built from federal lobbyist
          registry filings and ethics disclosures.
        </p>
        <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
          <li>
            Lobbying registry filings and ethics disclosures searchable by subject,
            official, or organization
          </li>
          <li>
            Stakeholder maps: enter a topic and see the full landscape of
            decision-makers, lobbyists, and organizations involved
          </li>
          <li>
            Company and GR firm profiles showing lobbying activity, clients, and
            target officials
          </li>
          <li>
            Gift disclosures database for public office holders
          </li>
        </ul>
      </section>

      {/* Module 7: Full-Text Search Archive */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Full-text search archive
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-6">
          Every transcript segment and scraped document PoliAlerts has ever
          captured is searchable. Find the exact moment something was said, or
          locate a regulatory filing from months ago.
        </p>
        <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
          <li>
            Search across every transcript and document in the archive
          </li>
          <li>
            Filter by jurisdiction, date range, and source type
          </li>
          <li>
            Results include matched text with surrounding context, source
            attribution, and direct links to full transcripts or documents
          </li>
        </ul>
      </section>

      {/* CTA Desktop */}
      <section className="rounded-full md:block hidden my-16 mx-5 lg:mx-10 xl:mx-24">
        <div className="w-full relative">
          <Image
            src="/PoliAlerts/assets/features/two-professional-men-looking-at-phone.png"
            className="w-full h-full"
            alt="Two professionals reviewing PoliAlerts on a phone"
            width={1400}
            height={500}
          />
          <div className="2xl:w-[35%] lg:w-[50%] w-[60%] 2xl:top-[34%] lg:top-[28%] top-[24%] left-[10%] px-5 text-white-text flex flex-col gap-3 xl:gap-5 absolute">
            <h2 className="text-[2.125rem] leading-[3rem] font-bold">
              Ready to see it in action? Talk to our team.
            </h2>
            <Link
              href="https://calendly.com/polialerts-info/polialerts"
              className="text-black-text font-semibold bg-white text-base py-3 px-8 w-fit rounded-full hover:bg-transparent hover:border hover:border-white hover:text-white-text"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Mobile */}
      <section className="md:hidden block my-10 px-5">
        <h2 className="font-bold text-[1.875rem] leading-[2.625rem] text-black-text mb-5">
          Ready to see it in action? Talk to our team.
        </h2>
        <Link
          href="https://calendly.com/polialerts-info/polialerts"
          className="text-base text-white-text font-semibold py-3 px-8 w-fit rounded-full bg-blue-button hover:bg-blue-hover inline-block"
        >
          Book a demo
        </Link>
      </section>
    </>
  );
}
