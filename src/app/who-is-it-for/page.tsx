import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title: "Who Is It For | PoliAlerts Use Cases",
  description:
    "See how government relations firms, corporate public affairs teams, nonprofits, legal teams, and journalists use PoliAlerts to monitor government activity across Canada in real time.",
};

export default function WhoIsItForPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/PoliAlerts/assets/whoIsItFor/close-up-of-shoes-walking-across-toronto-street.png"
        mobileImage="/PoliAlerts/assets/mobile-banners/polialerts-whoisitfor-mobile-banner.jpg"
        subtitle="Who is it for?"
        title="Built for the people who need to know first"
        desktopTextWidth="2xl:w-[50%] w-[55%]"
      />

      {/* Government relations firms */}
      <section className="md:my-16 my-5">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-2">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Government relations firms
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/PoliAlerts/assets/whoIsItFor/two-colleagues-working-in-modern-space.png"
                  alt="two-colleagues-working-in-modern-space"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-background-light-gray rounded-xl w-[90%] p-8 md:p-10 mx-auto md:mx-0">
                <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Monitor client issues across multiple jurisdictions from one dashboard. Get alerted when a minister mentions your client&apos;s sector in committee.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Track keywords across 7 jurisdictions simultaneously — federal, Ontario, Quebec, BC, Alberta, Toronto, and York Region
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Receive alerts within 60 seconds of a keyword being spoken in a legislative session or published in a government document
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Wake up to AI briefings that summarize everything relevant to your clients from the previous day
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Look up direct contact info for MPs, political staff, and ministerial offices in one searchable database
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Corporate public affairs */}
      <section className="md:my-16 my-5 md:py-16 py-10 bg-background-light-gray">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-1">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Corporate public affairs
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/PoliAlerts/assets/whoIsItFor/professional-man-in-office-using-phone.png"
                  alt="professional-man-in-office-using-phone"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-white rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Know about regulatory changes the day they&apos;re proposed. Track which reporters are covering your industry and what they&apos;re writing.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      45+ automated scrapers check sources like the Canada Gazette, Regulatory Registry, and Environmental Registry every 5 to 60 minutes
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Media monitoring covers 22+ Canadian news outlets with reporter profiles, beat tracking, and story clustering
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      See which organizations are lobbying on your regulatory topics and who they are targeting in government
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Configure daily digest or real-time alerts per feed, so your team gets the right information at the right frequency
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Nonprofits & advocacy */}
      <section className="md:my-16 my-5">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-1">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Nonprofits and advocacy groups
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/PoliAlerts/assets/whoIsItFor/professional-woman-with-laptop-walking-in-office-hallway.png"
                  alt="professional-woman-with-laptop-walking-in-office-hallway"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-background-light-gray rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Track bills, committee discussions, and lobbying activity on the issues you champion. See who has access to decision-makers on your topics.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Monitor bill introductions and readings through LEGISinfo and provincial bill trackers, updated every 15 minutes
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Use stakeholder maps to see which organizations and lobbyists are active on your issues and who in government they are meeting
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Live transcription of committee hearings means you know what was said minutes after it happens, not days later via Hansard
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Track government consultations across federal, Ontario, BC, Alberta, Quebec, and Toronto as they open and close
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Legal teams */}
      <section className="md:my-16 my-5 md:py-16 py-10 bg-background-light-gray">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-1">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Legal teams
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/PoliAlerts/assets/whoIsItFor/close-up-of-hands-working-on-laptop.png"
                  alt="close-up-of-hands-working-on-laptop"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-white rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Full-text searchable archive of every legislative proceeding. Due diligence on lobbying registrations and stakeholder relationships.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Search every transcript segment and government document ever captured, filtered by region, date range, and source type
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Browse federal lobbying registrations and ethics disclosures, including gift reports to public office holders
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Track Orders in Council, Gazette publications, and regulatory filings across multiple jurisdictions
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Review company and firm lobbying profiles to see which subjects they are active on and which officials they are targeting
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Journalists */}
      <section className="md:mt-12 mt-5 md:pb-16 pb-10">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-1">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Journalists
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/PoliAlerts/assets/whoIsItFor/two-colleagues-working-in-modern-space.png"
                  alt="journalist-working"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-background-light-gray rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Track what government is saying in real-time. Find out which officials are being lobbied on your beat.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Live transcription of House of Commons, 12+ federal committee rooms, provincial legislatures, and press conferences
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Search lobbying registrations by subject, company, or target official to see who has access on the topics you cover
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Set keyword alerts for breaking topics and get notified the moment they come up in any legislative session or government publication
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
