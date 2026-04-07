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
                  Your clients expect you to know first. PoliAlerts makes sure you do.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Track every client issue across the country from one dashboard
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Get the alert before the reporter calls asking for comment
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Brief your clients with AI-written summaries instead of spending your morning reading Hansard
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Look up direct contact info for MPs, political staff, and ministerial offices in one searchable directory
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
                  Regulatory surprises are expensive. PoliAlerts makes sure there aren&apos;t any.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Know about regulatory changes the day they&apos;re proposed, not when they&apos;re already in force
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      See which reporters are writing about your industry before the story runs
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Track lobbying activity on your regulatory files and see who else is at the table
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Wake up to a morning briefing that tells your team exactly what changed overnight
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
                  You can&apos;t fight for your cause if you don&apos;t know what&apos;s happening. PoliAlerts keeps you in the room even when you&apos;re not.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Follow every bill that touches your mission from introduction to royal assent
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      See who&apos;s lobbying against your position and who they&apos;re meeting with
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Get notified when your issues come up in committee — not two weeks later when you stumble across it
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Track government consultations as they open so you never miss a window to have your voice heard
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
                  The legislative record is your evidence base. PoliAlerts makes it searchable, complete, and instant.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Search years of legislative proceedings in seconds
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Run due diligence on lobbying relationships and ethics compliance
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Track regulatory changes across every jurisdiction your clients operate in
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Review company and firm lobbying profiles to understand who is active on the issues that matter to your cases
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
                  The story is happening right now. PoliAlerts makes sure you&apos;re the first to know.
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Get live transcripts from every committee room while you&apos;re still writing the lede
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      See the lobbying relationships behind the stories you&apos;re chasing
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-button font-bold mt-0.5">&#8226;</span>
                    <p className="text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7">
                      Set alerts for breaking political topics and get notified the moment they surface in any session or government publication
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
