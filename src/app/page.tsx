import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "PoliAlerts — Real-Time Government Monitoring and Intelligence for Canada",
  description:
    "Monitor every legislative session, committee hearing, and regulatory filing across Canada. Keyword alerts in 60 seconds, AI briefings, 45+ document scrapers, media monitoring, and lobbying intelligence.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── Desktop ── */}
      <div className="hidden lg:block relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover w-full h-full"
          src="/PoliAlerts/assets/home/old-city-hall-toronto-buildlings.png"
          alt="Toronto Old City Hall and downtown buildings"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center z-30">
          <div className="px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem] 2xl:w-[60%] xl:w-[68%] w-[75%]">
            <h1 className="text-5xl xl:text-[3.5rem] leading-[3.75rem] xl:leading-[4.25rem] font-bold text-white-text">
              Know what government is saying — minutes after they say it.
            </h1>
            <p className="text-xl leading-[1.875rem] mt-5 mb-8 text-white-text/90">
              PoliAlerts monitors every legislative session, committee hearing,
              and regulatory filing across Canada. Get alerted the moment your
              issues come up, and wake up to AI briefings that tell you what
              changed overnight.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://calendly.com/polialerts-info/polialerts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-button text-white-text text-base font-semibold py-4 px-8 rounded-full hover:bg-blue-hover transition-colors duration-300"
              >
                Book a demo
              </a>
              <a
                href="https://my.polialerts.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black-text text-base font-semibold py-4 px-8 rounded-full hover:bg-gray-text transition-colors duration-300"
              >
                Start monitoring
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── Mobile ── */}
      <div className="relative md:h-[38rem] h-full w-full lg:hidden block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-full w-full object-cover"
          src="/PoliAlerts/assets/home/Hero-mobile.png"
          alt="Toronto Old City Hall and downtown buildings"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-5 z-10">
          <h1 className="text-[2.25rem] leading-[2.875rem] md:text-5xl md:leading-[3.75rem] text-white font-bold">
            Know what government is saying — minutes after they say it.
          </h1>
          <p className="text-base leading-[1.625rem] my-5 text-white/90">
            PoliAlerts monitors every legislative session, committee hearing, and
            regulatory filing across Canada. Get alerted the moment your issues
            come up, and wake up to AI briefings that tell you what changed
            overnight.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/polialerts-info/polialerts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-button text-white-text text-sm font-semibold py-3 px-6 rounded-full hover:bg-blue-hover transition-colors duration-300"
            >
              Book a demo
            </a>
            <a
              href="https://my.polialerts.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black-text text-sm font-semibold py-3 px-6 rounded-full hover:bg-gray-text transition-colors duration-300"
            >
              Start monitoring
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <section className="bg-blue-button">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 py-8 lg:py-6 px-5 lg:px-10 xl:px-24">
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-white-text">
              60 seconds
            </p>
            <p className="text-sm text-white-text/80 mt-1">
              Average alert delivery time
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-white-text">
              45+
            </p>
            <p className="text-sm text-white-text/80 mt-1">
              Automated scrapers running
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-white-text">Every</p>
            <p className="text-sm text-white-text/80 mt-1">
              Province and territory covered
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-white-text">
              100+
            </p>
            <p className="text-sm text-white-text/80 mt-1">
              Municipalities covered across Canada
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Monitor ── */}
      <section className="py-16 lg:py-24 px-5 lg:px-10 xl:px-24">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-[2.5rem] md:leading-[3.25rem] font-bold text-black-text">
            What we monitor
          </h2>
          <p className="text-base text-clifford mt-3 max-w-2xl mx-auto leading-7">
            Three layers of monitoring that work together so nothing slips past
            you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Live Session Monitoring */}
          <div className="bg-background-light-gray rounded-2xl p-8">
            <div className="w-14 h-14 bg-blue-button rounded-xl flex items-center justify-center mb-5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z"
                  fill="white"
                />
                <path
                  d="M17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12H5C5 15.53 7.61 18.43 11 18.93V22H13V18.93C16.39 18.43 19 15.53 19 12H17Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="text-xl lg:text-[1.375rem] font-bold text-black-text mb-3 leading-[1.875rem]">
              Live Session Monitoring
            </h3>
            <p className="text-base text-clifford leading-7">
              Real-time transcription of legislative sessions, committee
              hearings, and press conferences. Federal, provincial, and
              municipal — as they happen.
            </p>
          </div>

          {/* Document Intelligence */}
          <div className="bg-background-light-gray rounded-2xl p-8">
            <div className="w-14 h-14 bg-blue-button rounded-xl flex items-center justify-center mb-5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                  fill="white"
                />
                <path d="M14 2V8H20" fill="white" opacity="0.5" />
                <path
                  d="M16 13H8V15H16V13Z"
                  fill="#2468cd"
                />
                <path
                  d="M16 17H8V19H16V17Z"
                  fill="#2468cd"
                />
                <path
                  d="M10 9H8V11H10V9Z"
                  fill="#2468cd"
                />
              </svg>
            </div>
            <h3 className="text-xl lg:text-[1.375rem] font-bold text-black-text mb-3 leading-[1.875rem]">
              Document Intelligence
            </h3>
            <p className="text-base text-clifford leading-7">
              45+ automated scrapers check press releases, bills, gazettes,
              regulatory filings, and consultations — some as often as every 5
              minutes.
            </p>
          </div>

          {/* AI Briefings */}
          <div className="bg-background-light-gray rounded-2xl p-8">
            <div className="w-14 h-14 bg-blue-button rounded-xl flex items-center justify-center mb-5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="text-xl lg:text-[1.375rem] font-bold text-black-text mb-3 leading-[1.875rem]">
              AI Briefings
            </h3>
            <p className="text-base text-clifford leading-7">
              Wake up to a personalized briefing that reads everything from
              yesterday and tells you what matters to you. Configurable by topic,
              jurisdiction, and delivery time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Beyond Monitoring ── */}
      <section className="py-16 lg:py-24 px-5 lg:px-10 xl:px-24 bg-background-light-gray">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-[2.5rem] md:leading-[3.25rem] font-bold text-black-text">
            Beyond monitoring
          </h2>
          <p className="text-base text-clifford mt-3 max-w-2xl mx-auto leading-7">
            The full picture of who is doing what in Canadian government.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Media Monitoring */}
          <div className="bg-white rounded-2xl p-8 border border-gray-text">
            <div className="w-12 h-12 bg-blue-button/10 rounded-xl flex items-center justify-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#2468cd"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M7 8H17V10H7V8Z" fill="#2468cd" />
                <path d="M7 12H14V14H7V12Z" fill="#2468cd" />
                <path d="M7 16H11V17H7V16Z" fill="#2468cd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black-text mb-3">
              Media Monitoring
            </h3>
            <p className="text-base text-clifford leading-7">
              Track 22+ Canadian news outlets. See which reporters cover your
              issues, who they quote, and what stories are trending. 2,000+
              reporter profiles with beat tracking.
            </p>
          </div>

          {/* Government Contacts */}
          <div className="bg-white rounded-2xl p-8 border border-gray-text">
            <div className="w-12 h-12 bg-blue-button/10 rounded-xl flex items-center justify-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z"
                  fill="#2468cd"
                />
                <path
                  d="M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#2468cd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black-text mb-3">
              Government Contacts
            </h3>
            <p className="text-base text-clifford leading-7">
              Updated contact info for MPs, Senators, provincial legislators, and
              political staff. Email, phone, social — searchable and integrated.
            </p>
          </div>

          {/* Lobbying Intelligence */}
          <div className="bg-white rounded-2xl p-8 border border-gray-text">
            <div className="w-12 h-12 bg-blue-button/10 rounded-xl flex items-center justify-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="#2468cd"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#2468cd"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#2468cd"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black-text mb-3">
              Lobbying Intelligence
            </h3>
            <p className="text-base text-clifford leading-7">
              See who is lobbying whom, on what subjects. Registry filings,
              ethics disclosures, stakeholder maps. Enter a topic, see the full
              landscape.
            </p>
          </div>

          {/* Full-Text Search Archive */}
          <div className="bg-white rounded-2xl p-8 border border-gray-text">
            <div className="w-12 h-12 bg-blue-button/10 rounded-xl flex items-center justify-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="#2468cd"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M16.5 16.5L21 21"
                  stroke="#2468cd"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d="M8 9H14" stroke="#2468cd" strokeWidth="1.5" />
                <path d="M8 12H12" stroke="#2468cd" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black-text mb-3">
              Full-Text Search Archive
            </h3>
            <p className="text-base text-clifford leading-7">
              Every transcript and document ever captured, searchable. Filter by
              jurisdiction, date, source type. Find the exact moment something
              was said.
            </p>
          </div>
        </div>
      </section>

      {/* ── Coverage Section ── */}
      <section className="py-16 lg:py-24 px-5 lg:px-10 xl:px-24">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-[2.5rem] md:leading-[3.25rem] font-bold text-black-text">
            Monitoring across Canada
          </h2>
          <p className="text-base text-clifford mt-3 max-w-2xl mx-auto leading-7">
            Federal, provincial, and municipal — with more jurisdictions added on
            request.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {[
            { name: "Federal", desc: "House of Commons, Senate, 12+ committee rooms, Canada Gazette, LEGISinfo, Orders in Council" },
            { name: "Ontario", desc: "Legislature, committees, press conferences, Regulatory Registry, Environmental Registry, Gazette" },
            { name: "Quebec", desc: "National Assembly, committees, Gazette, consultations, bills" },
            { name: "British Columbia", desc: "Legislature, Gazette, Orders in Council, public engagements" },
            { name: "Alberta", desc: "Legislature, Gazette, Energy Regulator, environmental assessments" },
            { name: "Saskatchewan", desc: "Legislature, press releases, Gazette, Orders in Council" },
            { name: "Manitoba", desc: "Legislature, press releases, Gazette, Orders in Council" },
            { name: "New Brunswick", desc: "Legislature, press releases, Royal Gazette" },
            { name: "Nova Scotia", desc: "Legislature, press releases, Royal Gazette" },
            { name: "Prince Edward Island", desc: "Legislature, press releases, Royal Gazette" },
            { name: "Newfoundland & Labrador", desc: "Legislature, press releases, Gazette, Orders in Council" },
            { name: "Northwest Territories", desc: "Legislative Assembly, press releases, Gazette" },
            { name: "Yukon", desc: "Legislative Assembly, press releases, Gazette" },
            { name: "Nunavut", desc: "Legislative Assembly, press releases, Gazette" },
          ].map((j) => (
            <div key={j.name} className="border border-gray-text rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-button mb-3">{j.name}</h3>
              <p className="text-sm text-clifford leading-6">{j.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-clifford mb-5">
            Plus 100+ municipalities across Canada
          </p>
          <Link
            href="/coverage"
            className="inline-flex items-center gap-2 text-blue-button font-semibold text-base hover:text-blue-hover transition-colors duration-300"
          >
            <span className="w-2.5 h-2.5 bg-blue-button rounded-full" />
            <span className="underline hover:no-underline">
              See full coverage details
            </span>
          </Link>
        </div>
      </section>

      {/* ── Who Uses PoliAlerts ── */}
      <section className="py-16 lg:py-24 px-5 lg:px-10 xl:px-24 bg-background-light-gray">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-[2.5rem] md:leading-[3.25rem] font-bold text-black-text">
            Who uses PoliAlerts
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* GR Firms */}
          <div className="bg-white rounded-2xl p-7 border border-gray-text">
            <h3 className="text-lg font-bold text-black-text mb-3">
              Government relations firms
            </h3>
            <p className="text-sm text-clifford leading-6">
              Monitor client issues across multiple jurisdictions from one
              dashboard. Get alerted when a minister mentions your client's
              sector in committee.
            </p>
          </div>

          {/* Corporate PA */}
          <div className="bg-white rounded-2xl p-7 border border-gray-text">
            <h3 className="text-lg font-bold text-black-text mb-3">
              Corporate public affairs
            </h3>
            <p className="text-sm text-clifford leading-6">
              Know about regulatory changes the day they are proposed. Track
              which reporters are covering your industry.
            </p>
          </div>

          {/* Nonprofits */}
          <div className="bg-white rounded-2xl p-7 border border-gray-text">
            <h3 className="text-lg font-bold text-black-text mb-3">
              Nonprofits and advocacy
            </h3>
            <p className="text-sm text-clifford leading-6">
              Track bills, committee discussions, and lobbying activity on the
              issues you champion.
            </p>
          </div>

          {/* Legal */}
          <div className="bg-white rounded-2xl p-7 border border-gray-text">
            <h3 className="text-lg font-bold text-black-text mb-3">
              Legal teams
            </h3>
            <p className="text-sm text-clifford leading-6">
              Full-text searchable archive of every legislative proceeding. Due
              diligence on lobbying registrations.
            </p>
          </div>

          {/* Journalists */}
          <div className="bg-white rounded-2xl p-7 border border-gray-text">
            <h3 className="text-lg font-bold text-black-text mb-3">
              Journalists
            </h3>
            <p className="text-sm text-clifford leading-6">
              Track what government is saying in real-time. Find out which
              officials are being lobbied on your beat.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── Desktop ── */}
      <div className="hidden lg:block relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover w-full h-[32rem]"
          src="/PoliAlerts/assets/home/architectural-close-up-view-of-building.png"
          alt="Architectural close-up of building"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center z-30">
          <div className="px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem] max-w-3xl">
            <h2 className="text-4xl xl:text-5xl leading-[3rem] xl:leading-[3.75rem] font-bold text-white-text">
              Stop refreshing Hansard. Start getting briefed.
            </h2>
            <p className="text-lg leading-[1.75rem] mt-5 mb-8 text-white-text/90">
              Join the professionals who never miss a critical moment in Canadian
              government.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://calendly.com/polialerts-info/polialerts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-button text-white-text text-base font-semibold py-4 px-8 rounded-full hover:bg-blue-hover transition-colors duration-300"
              >
                Book a demo
              </a>
              <a
                href="https://my.polialerts.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black-text text-base font-semibold py-4 px-8 rounded-full hover:bg-gray-text transition-colors duration-300"
              >
                Start monitoring
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── Mobile ── */}
      <div className="relative md:h-[38rem] h-full w-full lg:hidden block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-full w-full object-cover"
          src="/PoliAlerts/assets/home/Bottom-mobile.png"
          alt="Architectural close-up of building"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-5 z-10">
          <h2 className="text-[2.25rem] leading-[2.875rem] md:text-5xl md:leading-[3.75rem] text-white font-bold">
            Stop refreshing Hansard. Start getting briefed.
          </h2>
          <p className="text-base leading-[1.625rem] my-5 text-white/90">
            Join the professionals who never miss a critical moment in Canadian
            government.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/polialerts-info/polialerts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-button text-white-text text-sm font-semibold py-3 px-6 rounded-full hover:bg-blue-hover transition-colors duration-300"
            >
              Book a demo
            </a>
            <a
              href="https://my.polialerts.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black-text text-sm font-semibold py-3 px-6 rounded-full hover:bg-gray-text transition-colors duration-300"
            >
              Start monitoring
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
