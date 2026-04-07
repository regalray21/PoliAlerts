import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title:
    "PoliAlerts Features | Real-Time Government Monitoring for Canada",
  description:
    "Live session transcription, keyword alerts, AI briefings, document monitoring, media intelligence, government contacts, and lobbying data — all in one platform covering every level of Canadian government.",
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

      {/* 1. Live Transcription */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Never miss what&apos;s said in session
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] max-w-3xl">
          You used to choose between watching hours of committee feeds live or waiting days for Hansard to publish.
          Now every legislative session, committee hearing, and press conference across Canada is transcribed
          live and searchable the moment words leave a minister&apos;s mouth. If your issue comes up at 2:14pm in
          a committee room, you&apos;ll know by 2:15.
        </p>
      </section>

      {/* 2. AI Briefings */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20 bg-background-light-gray">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Your morning briefing, written overnight
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] max-w-3xl">
          Imagine having an analyst who reads every transcript, every filing, and every press release
          from the previous day — then writes you a one-page summary of what matters, tailored to your
          issues and your jurisdictions. It&apos;s in your inbox by 7am. That&apos;s what this is.
        </p>
      </section>

      {/* 3. Document Monitoring */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Every filing, the moment it drops
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] max-w-3xl">
          Bills, regulatory changes, gazette postings, Orders in Council, consultations — the government
          publishes constantly, across dozens of sources and jurisdictions. You&apos;ll know the moment something
          relevant is published, not when a colleague forwards it to you next week. Stop refreshing government
          websites. Let the alerts come to you.
        </p>
      </section>

      {/* 4. Media Monitoring */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20 bg-background-light-gray">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Know the reporters before they call you
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] max-w-3xl">
          See which journalists are covering your issues, who they&apos;re quoting, and what stories are
          gaining traction — before the interview request lands. Track coverage across Canada&apos;s major
          outlets with reporter profiles, beat history, and story clustering that shows you the full
          media landscape at a glance. Be ready for the call instead of caught off guard by it.
        </p>
      </section>

      {/* 5. Government Contacts */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          The contact book you wish existed
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] max-w-3xl">
          Every MP, senator, provincial legislator, political staffer, and ministerial office — email,
          phone, social. Searchable. Updated. Stop asking around for someone&apos;s direct line or digging
          through parliamentary websites. The person you need to reach is one search away.
        </p>
      </section>

      {/* 6. Lobbying Intelligence */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20 bg-background-light-gray">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          See who has access
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] max-w-3xl">
          Enter a topic and see who&apos;s lobbying on it, which officials they&apos;re meeting with, and what
          they&apos;re asking for. Stakeholder maps show you the full landscape you&apos;re operating in — who
          the players are, who has the ear of the decision-makers, and where you stand relative to the
          competition. This is the intelligence you need to walk into a meeting prepared.
        </p>
      </section>

      {/* 7. Search Archive */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Find anything ever said
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] max-w-3xl">
          Every transcript, every document, fully searchable. That thing the minister said in committee
          last March? Find it in seconds. The regulatory filing your client asked about from six months
          ago? It&apos;s there. Your entire institutional memory, indexed and instant.
        </p>
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
