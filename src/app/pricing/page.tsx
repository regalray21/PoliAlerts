import type { Metadata } from "next";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title:
    "PoliAlerts Pricing | Affordable Poli Alerts for Government Monitoring Across Canada",
  description:
    "Check out PoliAlerts pricing plans for tracking government activities and transcripts in Toronto, Ontario, Ottawa, Alberta, and Vancouver. Get transparent pricing for real-time Poli Alerts and committee monitoring across Canada.",
};

function CheckIcon() {
  return (
    <svg
      className="min-w-6 max-w-6 max-h-6 min-h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 382.87"
    >
      <g>
        <path
          fill="#2468cd"
          d="m444.18,0L183.3,242.01l-110.32-117.73L0,192.66l178.23,190.21L512,73.52,444.18,0Z"
        />
      </g>
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="min-w-5 max-w-5 max-h-5 min-h-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 421.71 421.71"
    >
      <g>
        <polygon
          fill="#6f6f6f"
          points="421.71 70.53 351.17 0 210.85 140.32 70.53 0 0 70.53 140.32 210.85 0 351.17 70.53 421.71 210.85 281.39 351.17 421.71 421.71 351.17 281.39 210.85 421.71 70.53"
        />
      </g>
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/assets/pricing/three-professionals-walking-in-business-district-by-water.png"
        mobileImage="/assets/mobile-banners/polialerts-pricing-mobile-banner.jpg"
        subtitle="PLANS"
        title="Pricing"
        desktopTextWidth="2xl:w-[45%] w-[50%]"
      />

      {/* Hero Section */}
      <section className="px-5 lg:px-10 xl:px-24 lg:mt-16 my-8">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5">
          Choose your plan
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem]">
          Our plans include robust features designed to keep you informed and
          ahead of the game. Explore your options below.
        </p>

        <div className="flex mt-10 justify-center lg:justify-start 2xl:justify-center">
          <div className="grid grid-cols-1 lg:gap-0 gap-10 lg:grid-cols-3 my-5">
            {/* Budget Plan */}
            <header className="border-l border-t border-b xl:border-r-0 border-r py-14 lg:mt-10 border-gray-line gap-8 flex-col flex w-full px-10">
              <h2 className="text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] mx-auto font-bold text-black-text">
                Budget
              </h2>

              <button className="bg-blue-button mx-auto w-fit rounded-full py-3 px-8 text-white-text text-base font-semibold hover:bg-blue-hover">
                <Link href="/demo-booking">Get started</Link>
              </button>
              <hr className="mt-3 border-gray-line" />
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Dashboard access
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Up to 3 tracked keywords
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  1 coverage area
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  End-of-day email alerts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <XIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Real-time email alerts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <XIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Access to transcripts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <XIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Early access to new features
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  1 recipient email address
                </p>
              </section>
            </header>

            {/* Pro Plan (Recommended) */}
            <header className="px-8 bg-background-light-gray py-7 border border-gray-line gap-8 flex-col flex w-full">
              <p className="mx-auto bg-blue-button py-2 px-4 text-white-text text-base font-semibold rounded-md tracking-widest">
                RECOMMENDED
              </p>
              <h2 className="text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] mx-auto font-bold text-black-text">
                Pro
              </h2>

              <button className="bg-blue-button mx-auto w-fit rounded-full py-3 px-8 text-white-text text-base font-semibold hover:bg-blue-hover">
                <Link href="/demo-booking">Get started</Link>
              </button>
              <hr className="mt-3 border-gray-line" />
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <h2 className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Dashboard access
                </h2>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Unlimited tracked keywords
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Unlimited coverage areas
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  End-of-day email alerts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Real-time email alerts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Access to transcripts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Early access to new features
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Unlimited recipient email addresses
                </p>
              </section>
            </header>

            {/* Plus Plan */}
            <header className="border-l border-t border-b border-r xl:border-l-0 lg:mt-10 border-gray-line gap-8 flex-col flex w-full py-14 px-10">
              <h2 className="text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] mx-auto font-bold">
                Plus
              </h2>

              <button className="bg-blue-button mx-auto w-fit rounded-full py-3 px-8 text-white-text text-base font-semibold hover:bg-blue-hover">
                <Link href="/demo-booking">Get started</Link>
              </button>
              <hr className="mt-3 border-gray-line" />
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Dashboard access
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Up to 10 tracked keywords
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  2 coverage areas
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  End-of-day email alerts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <XIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Real-time email alerts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <XIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Access to transcripts
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <XIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  Early access to new features
                </p>
              </section>
              <section className="flex gap-3 items-center">
                <CheckIcon />
                <p className="ml-3 font-bold text-xl leading-[1.875rem] md:leading-[2.375rem] text-black-text">
                  2 recipient email addresses
                </p>
              </section>
            </header>
          </div>
        </div>
      </section>
    </>
  );
}
