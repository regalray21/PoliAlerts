import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "PoliAlerts Coverage | Government Monitoring Across Every Province and Territory",
  description:
    "Jurisdiction-by-jurisdiction breakdown of PoliAlerts government monitoring across all Canadian provinces and territories, plus 100+ municipalities.",
};

const jurisdictions = [
  {
    name: "Federal",
    abbr: "CA",
    sources: [
      "House of Commons + Senate live sessions",
      "12+ committee rooms monitored simultaneously",
      "canada.ca press releases (every 5 min)",
      "Canada Gazette",
      "LEGISinfo bills tracker",
      "Orders in Council",
      "Federal consultations",
    ],
  },
  {
    name: "Ontario",
    abbr: "ON",
    sources: [
      "Legislature, committees, press conferences, Question Period",
      "Ontario press releases (every 5 min)",
      "Bills, Regulatory Registry, Environmental Registry",
      "Ontario Gazette, Orders in Council",
    ],
  },
  {
    name: "Quebec",
    abbr: "QC",
    sources: [
      "National Assembly committees",
      "Press releases, bills, consultations",
      "Quebec Gazette (Parts 1 & 2)",
    ],
  },
  {
    name: "British Columbia",
    abbr: "BC",
    sources: [
      "Legislature sessions",
      "Press releases, Gazette, Orders in Council",
      "Public engagements",
    ],
  },
  {
    name: "Alberta",
    abbr: "AB",
    sources: [
      "Legislature sessions",
      "Press releases, Gazette",
      "Energy Regulator filings",
      "Environmental impact assessments",
      "Public engagements",
    ],
  },
  {
    name: "Saskatchewan",
    abbr: "SK",
    sources: [
      "Legislature sessions",
      "Press releases, Gazette",
      "Orders in Council",
    ],
  },
  {
    name: "Manitoba",
    abbr: "MB",
    sources: [
      "Legislature sessions",
      "Press releases, Gazette",
      "Orders in Council",
    ],
  },
  {
    name: "New Brunswick",
    abbr: "NB",
    sources: [
      "Legislature sessions",
      "Press releases, Royal Gazette",
      "Orders in Council",
    ],
  },
  {
    name: "Nova Scotia",
    abbr: "NS",
    sources: [
      "Legislature sessions",
      "Press releases, Royal Gazette",
      "Orders in Council",
    ],
  },
  {
    name: "Prince Edward Island",
    abbr: "PE",
    sources: [
      "Legislature sessions",
      "Press releases, Royal Gazette",
    ],
  },
  {
    name: "Newfoundland & Labrador",
    abbr: "NL",
    sources: [
      "Legislature sessions",
      "Press releases, Gazette",
      "Orders in Council",
    ],
  },
  {
    name: "Northwest Territories",
    abbr: "NT",
    sources: [
      "Legislative Assembly sessions",
      "Press releases, Gazette",
    ],
  },
  {
    name: "Yukon",
    abbr: "YT",
    sources: [
      "Legislative Assembly sessions",
      "Press releases, Gazette",
    ],
  },
  {
    name: "Nunavut",
    abbr: "NU",
    sources: [
      "Legislative Assembly sessions",
      "Press releases, Gazette",
    ],
  },
];

const municipalities = [
  {
    name: "Toronto",
    abbr: "TO",
    sources: [
      "City Council live sessions",
      "Press releases (every 5 min)",
      "Committee agendas & decisions",
      "City consultations",
    ],
  },
  {
    name: "York Region",
    abbr: "YR",
    sources: [
      "Regional council agendas",
    ],
  },
];

function JurisdictionIcon({ abbr }: { abbr: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-blue-button text-white-text flex items-center justify-center font-bold text-sm shrink-0">
      {abbr}
    </div>
  );
}

export default function CoveragePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-20 bg-background-gray">
        <p className="text-xs uppercase tracking-widest text-white-text mb-4 font-semibold">
          COVERAGE
        </p>
        <h1 className="text-[2.375rem] leading-[3.25rem] md:text-5xl md:leading-[4rem] font-bold text-white-text mb-5">
          What we monitor
        </h1>
        <p className="text-base md:text-lg text-white-text md:leading-8 leading-7 max-w-3xl">
          Real-time coverage across federal, provincial, and municipal government
          in Canada.
        </p>
      </section>

      {/* Federal & Provincial */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16">
        <h2 className="font-bold text-2xl md:text-[2rem] text-black-text mb-3">
          Federal &amp; Provincial
        </h2>
        <p className="text-sm md:text-base text-clifford mb-8">
          All 13 provinces and territories, plus federal Parliament.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jurisdictions.map((jurisdiction) => (
            <div
              key={jurisdiction.name}
              className="border border-gray-line rounded-xl p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <JurisdictionIcon abbr={jurisdiction.abbr} />
                <h3 className="font-bold text-xl md:text-[1.375rem] text-black-text">
                  {jurisdiction.name}
                </h3>
              </div>
              <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
                {jurisdiction.sources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Municipal */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16 bg-background-light-gray">
        <h2 className="font-bold text-2xl md:text-[2rem] text-black-text mb-3">
          Municipal
        </h2>
        <p className="text-sm md:text-base text-clifford mb-8">
          City and regional councils across Canada. More added on request.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {municipalities.map((municipality) => (
            <div
              key={municipality.name}
              className="border border-gray-line rounded-xl p-8 flex flex-col bg-white"
            >
              <div className="flex items-center gap-3 mb-5">
                <JurisdictionIcon abbr={municipality.abbr} />
                <h3 className="font-bold text-xl md:text-[1.375rem] text-black-text">
                  {municipality.name}
                </h3>
              </div>
              <ul className="list-disc list-outside pl-5 text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] space-y-2">
                {municipality.sources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16 bg-background-light-gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-2xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
            Plus 100+ municipalities across Canada
          </h2>
          <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] mb-8">
            Need coverage in a jurisdiction we don&apos;t list? We add new sources
            on request. Tell us what you need and we will set it up.
          </p>
          <Link
            href="https://calendly.com/polialerts-info/polialerts"
            className="text-base text-white-text font-semibold py-3 px-8 rounded-full bg-blue-button hover:bg-blue-hover inline-block"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </>
  );
}
