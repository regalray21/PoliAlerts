import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title: "Who is it For?",
  description:
    "PoliAlerts empowers diverse professionals including government relations experts, lobbyists, communications executives, legal professionals, and more with real-time legislative tracking.",
};

export default function WhoIsItForPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/assets/whoIsItFor/close-up-of-shoes-walking-across-toronto-street.png"
        mobileImage="/assets/mobile-banners/polialerts-whoisitfor-mobile-banner.jpg"
        subtitle="Who is it for?"
        title="Empowering diverse professionals"
        desktopTextWidth="2xl:w-[50%] w-[55%]"
      />

      {/* Policy and advocacy professionals */}
      <section className="md:my-16 my-5">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-2">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Policy and advocacy professionals:
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/whoIsItFor/two-colleagues-working-in-modern-space.png"
                  alt="two-colleagues-working-in-modern-space"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-background-light-gray rounded-xl w-[90%] p-8 md:p-10 mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Government relations and lobbying
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Stay informed and empowered to influence policy by receiving
                  real-time updates on legislative discussions impacting your
                  stakeholders. PoliAlerts arms you with the latest data,
                  allowing you to act swiftly and strategically to support your
                  policy goals.
                </p>
              </div>
            </section>
            <section>
              <div className="bg-background-light-gray rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Nonprofit and advocacy groups
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Keep track of policy changes that affect your causes. Leverage
                  our up-to-date legislative information to mobilize your
                  supporters and campaign effectively for your causes.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Communication and Media */}
      <section className="md:my-16 my-5 md:py-16 py-10 bg-background-light-gray">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-1">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Communications and media:
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/whoIsItFor/professional-man-in-office-using-phone.png"
                  alt="professional-man-in-office-using-phone"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-white rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Communications executives
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Monitor legislative discussions to protect and manage your
                  organization or brand&apos;s reputation. Enhance your
                  background knowledge and strategic understanding with our
                  timely alerts.
                </p>
              </div>
            </section>
            <section>
              <div className="bg-white rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Media and journalists
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Receive real-time alerts that enable you to report accurately
                  and stay ahead of the news cycle.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Legal and Compliance */}
      <section className="md:my-16 my-5">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-1">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Legal and compliance:
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/whoIsItFor/professional-woman-with-laptop-walking-in-office-hallway.png"
                  alt="professional-woman-with-laptop-walking-in-office-hallway"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-background-light-gray rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Legal professionals
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Keep pace with regulatory changes and legislative
                  developments that impact your practice areas, delivering the
                  most current and accurate legal advice to your clients.
                </p>
              </div>
            </section>
            <section>
              <div className="bg-background-light-gray rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Corporations and business leaders
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Monitor regulatory changes that affect your industry. Make
                  informed business decisions and stay compliant with the latest
                  legislative developments.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Research and Analysis */}
      <section className="md:mt-12 mt-5 md:py-16 py-10 bg-background-light-gray">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt-1">
              <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:pl-10 xl:pl-24">
                Research and analysis:
              </h2>
              <div className="w-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/whoIsItFor/close-up-of-hands-working-on-laptop.png"
                  alt="close-up-of-hands-working-on-laptop"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-7">
            <section>
              <div className="bg-white rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Public affairs and policy analysts
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Analyze policy changes and their implications with real-time
                  data. Provide accurate and relevant policy insights to
                  stakeholders.
                </p>
              </div>
            </section>
            <section>
              <div className="bg-white rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Academic and research institutions
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Access comprehensive legislative data for research and
                  academic studies. Stay informed on policy trends and
                  legislative developments.
                </p>
              </div>
            </section>
            <section>
              <div className="bg-white rounded-xl p-8 md:p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Consulting firms
                </h3>
                <p className="mt-5 text-sm text-clifford leading-[1.625rem] md:text-base md:leading-7 font-semibold">
                  Provide clients with up-to-date legislative insights. Enhance
                  your advisory services with real-time data and comprehensive
                  analysis.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
