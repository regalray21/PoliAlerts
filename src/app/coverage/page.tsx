import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "PoliAlerts Coverage | What We Monitor Across Canadian Government",
  description:
    "Jurisdiction-by-jurisdiction breakdown of PoliAlerts government monitoring: federal, Ontario, Quebec, British Columbia, Alberta, Toronto, York Region, and 100+ municipalities across Canada.",
};

const jurisdictions = [
  {
    name: "Federal",
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
    sources: [
      "Legislature, committees, press conferences, Question Period",
      "Ontario press releases (every 5 min)",
      "Bills, Regulatory Registry, Environmental Registry",
      "Ontario Gazette, Orders in Council",
    ],
  },
  {
    name: "Quebec",
    sources: [
      "National Assembly committees",
      "Press releases, bills, consultations",
      "Quebec Gazette (Parts 1 & 2)",
    ],
  },
  {
    name: "British Columbia",
    sources: [
      "Legislature sessions",
      "Press releases, Gazette, Orders in Council",
      "Public engagements",
    ],
  },
  {
    name: "Alberta",
    sources: [
      "Legislature sessions",
      "Press releases, Gazette",
      "Energy Regulator filings",
      "Environmental impact assessments",
      "Public engagements",
    ],
  },
  {
    name: "Toronto",
    sources: [
      "City Council live sessions",
      "Press releases (every 5 min)",
      "Committee agendas & decisions",
      "City consultations",
    ],
  },
  {
    name: "York Region",
    sources: [
      "Regional council agendas",
    ],
  },
];

function JurisdictionIcon({ name }: { name: string }) {
  const label = name.charAt(0);
  return (
    <div className="w-10 h-10 rounded-full bg-blue-button text-white-text flex items-center justify-center font-bold text-lg shrink-0">
      {label}
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

      {/* Jurisdiction Cards Grid */}
      <section className="px-5 lg:px-10 xl:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jurisdictions.map((jurisdiction) => (
            <div
              key={jurisdiction.name}
              className="border border-gray-line rounded-xl p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <JurisdictionIcon name={jurisdiction.name} />
                <h2 className="font-bold text-xl md:text-[1.375rem] text-black-text">
                  {jurisdiction.name}
                </h2>
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
