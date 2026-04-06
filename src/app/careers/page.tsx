import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title:
    "Careers at PoliAlerts | Join the Poli Alerts Government Tracking Team in Canada",
  description:
    "Apply for careers at PoliAlerts. Join our team delivering Poli Alerts for government monitoring in Ontario, Toronto, Vancouver, Ottawa, and Alberta. Be part of Canada's leading government tracking and transcript service.",
};

export default function CareersPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/assets/bookademo/toronto-city-hall-buildings-from-below.png"
        mobileImage="/assets/mobile-banners/polialerts-buildings-mobile-banner.jpg"
        subtitle="CAREERS"
        title="Join the PoliAlerts Team"
        desktopTextWidth="2xl:w-[55%] w-[60%]"
      />

      <section className="px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem] lg:mt-16 mt-10 mb-[20rem]">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] text-black-text mb-5">
          Thank you for your interest
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem]">
          There are no open positions at this time. Please check again later.
        </p>
      </section>
    </>
  );
}
