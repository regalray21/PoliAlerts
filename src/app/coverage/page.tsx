import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "PoliAlerts Coverage | Every Province, Territory, and 100+ Municipalities",
  description:
    "PoliAlerts monitors legislative sessions, regulatory filings, press releases, and policy changes across every Canadian province and territory, plus 100+ municipalities.",
};

const provinces = [
  "Federal",
  "Ontario",
  "Quebec",
  "British Columbia",
  "Alberta",
  "Saskatchewan",
  "Manitoba",
  "New Brunswick",
  "Nova Scotia",
  "Prince Edward Island",
  "Newfoundland & Labrador",
  "Northwest Territories",
  "Yukon",
  "Nunavut",
];

export default function CoveragePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-24 bg-background-gray">
        <p className="text-xs uppercase tracking-widest text-white-text mb-4 font-semibold">
          COVERAGE
        </p>
        <h1 className="text-[2.375rem] leading-[3.25rem] md:text-5xl md:leading-[4rem] font-bold text-white-text mb-6 max-w-3xl">
          Every level of Canadian government. One platform.
        </h1>
        <p className="text-base md:text-lg text-white-text md:leading-8 leading-7 max-w-2xl opacity-90">
          Legislative sessions, committee hearings, regulatory filings, press
          releases, bills, gazettes, consultations, and Orders in Council —
          monitored continuously across the country.
        </p>
      </section>

      {/* What we track */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] text-black-text mb-4">
          What we track
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-12 max-w-2xl">
          For every jurisdiction, PoliAlerts monitors the same core set of
          government activity — so you get consistent, reliable coverage no
          matter where the action is.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-5xl">
          <div>
            <h3 className="font-bold text-lg text-black-text mb-2">Legislative sessions</h3>
            <p className="text-sm text-clifford leading-6">
              Live transcription of House debates, Question Period, and committee
              hearings. Searchable the moment they happen.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-black-text mb-2">Bills &amp; legislation</h3>
            <p className="text-sm text-clifford leading-6">
              New bills, readings, amendments, and royal assent — tracked from
              introduction to passage.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-black-text mb-2">Press releases</h3>
            <p className="text-sm text-clifford leading-6">
              Government announcements from every level, captured as they&apos;re
              published.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-black-text mb-2">Regulatory filings</h3>
            <p className="text-sm text-clifford leading-6">
              Gazette postings, registry updates, environmental assessments, and
              regulatory proposals.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-black-text mb-2">Orders in Council</h3>
            <p className="text-sm text-clifford leading-6">
              Executive decisions and appointments, tracked across federal and
              provincial governments.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-black-text mb-2">Consultations</h3>
            <p className="text-sm text-clifford leading-6">
              Public engagement opportunities and consultation periods — know
              when the window opens and when it closes.
            </p>
          </div>
        </div>
      </section>

      {/* Where we cover */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20 bg-background-light-gray">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] text-black-text mb-4">
          Where we cover
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-12 max-w-2xl">
          Every province and territory, plus federal Parliament and 100+
          municipalities. If it&apos;s Canadian government, we&apos;re watching it.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-5xl">
          {provinces.map((name) => (
            <div
              key={name}
              className="bg-white rounded-xl px-5 py-5 flex items-center gap-3 border border-transparent hover:border-blue-button transition-colors duration-300"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-button shrink-0" />
              <p className="font-semibold text-sm text-black-text">{name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-button shrink-0" />
          <p className="font-semibold text-base text-black-text">
            100+ municipalities across Canada
          </p>
          <span className="text-sm text-clifford">
            — city councils, regional councils, committee agendas, and local
            consultations
          </span>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 lg:px-10 xl:px-24 py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-bold text-2xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-4">
            Don&apos;t see your jurisdiction?
          </h2>
          <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-8">
            We add new sources on request. Tell us what you need and
            we&apos;ll set it up.
          </p>
          <a
            href="https://calendly.com/polialerts-info/polialerts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-white-text font-semibold py-3 px-8 rounded-full bg-blue-button hover:bg-blue-hover inline-block duration-500"
          >
            Book a demo
          </a>
        </div>
      </section>
    </>
  );
}
