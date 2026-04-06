import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import SupportForm from "@/components/SupportForm";

export const metadata: Metadata = {
  title:
    "PoliAlerts Support | Get Help with Government Tracking in Canada",
  description:
    "Get support from PoliAlerts. Reach out for assistance with real-time government tracking, committee monitoring, and transcripts across Ontario, Toronto, Ottawa, Alberta, Vancouver, and British Columbia in Canada.",
};

export default function SupportPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/assets/bookademo/toronto-city-hall-buildings-from-below.png"
        mobileImage="/assets/mobile-banners/polialerts-buildings-mobile-banner.jpg"
        subtitle="NEED HELP?"
        title="Get support"
        desktopTextWidth="2xl:w-[45%] w-[50%]"
      />

      <section className="px-5 lg:px-10 xl:px-24 lg:my-16 my-8">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Share your questions and our team will get back to you soon
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem]">
          Fields marked with an asterisk are mandatory.
        </p>
        <SupportForm />
      </section>
    </>
  );
}
