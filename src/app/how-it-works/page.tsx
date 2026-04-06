import type { Metadata } from "next";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title:
    "How PoliAlerts Works | Poli Alerts for Government Tracking in Canada",
  description:
    "Learn how PoliAlerts delivers real-time Poli Alerts for tracking government policies and committees. Monitor activities in Ontario, Toronto, Ottawa, Vancouver, Alberta, and British Columbia with seamless government monitoring across Canada.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/PoliAlerts/assets/howitworks/close-up-of-hands-working-on-laptop.png"
        mobileImage="/PoliAlerts/assets/mobile-banners/polialerts-howitworks-mobile-banner.jpg"
        subtitle="HOW IT WORKS"
        title="Government intelligence at your fingertips"
        desktopTextWidth="2xl:w-[55%] w-[60%]"
      />

      {/* Getting Started Section */}
      <section className="md:my-16 my-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-6 md:gap-10 lg:-mt:3">
              <div>
                <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5 px-5 lg:px-10 xl:px-24">
                  Getting started
                </h2>
                <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem] px-5 lg:px-10 xl:px-24">
                  Get started quickly and effortlessly with PoliAlerts. Follow
                  these steps to set up your account to start receiving
                  real-time legislative updates.
                </p>
              </div>

              <div className="w-[80%] mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/PoliAlerts/assets/howitworks/womans-hands-typing-on-laptop.png"
                  alt="womans-hands-typing-on-laptop"
                />
              </div>
            </div>
          </div>

          <div className="xl:w-[95%] lg:w-full 2xl:w-[98%] w-full flex flex-col gap-5">
            <section>
              <div className="bg-background-light-gray rounded-xl p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Sign up
                </h3>
                <p className="mt-5 text-clifford text-sm md:text-base md:leading-7 leading-[1.625rem] font-semibold">
                  <Link
                    href="/demo-booking"
                    className="text-blue-button underline hover:text-blue-hover hover:no-underline font-semibold"
                  >
                    Connect today
                  </Link>{" "}
                  and we&apos;ll set you up with everything you need to get
                  started, including access to your customizable dashboard.
                </p>
              </div>
            </section>
            <section>
              <div className="bg-background-light-gray rounded-xl p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-black-text text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem]">
                  Customize your monitoring
                </h3>
                <p className="mt-5 text-clifford text-sm md:text-base md:leading-7 leading-[1.625rem] font-semibold">
                  Add your specific keywords and select the legislative bodies
                  you want to track.
                </p>
              </div>
            </section>
            <section>
              <div className="bg-background-light-gray rounded-xl p-10 w-[90%] mx-auto md:mx-0">
                <h3 className="font-bold text-[1.375rem] leading-[2.125rem] md:text-[1.625rem] md:leading-[2.375rem] text-black-text">
                  Set your preferences
                </h3>
                <p className="mt-5 text-clifford text-sm md:text-base md:leading-7 leading-[1.625rem] font-semibold">
                  Customize your notification preferences and recipient list.
                  Start receiving timely updates.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
