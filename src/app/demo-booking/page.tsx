import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Contact PoliAlerts | Poli Alerts for Government Monitoring in Canada",
  description:
    "Contact PoliAlerts for help with Poli Alerts in Ontario, Toronto, Ottawa, Alberta, Vancouver, and British Columbia. Reach out for assistance with real-time government tracking, committee monitoring, and transcripts in Canada.",
};

export default function DemoBookingPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/PoliAlerts/assets/bookademo/toronto-city-hall-buildings-from-below.png"
        mobileImage="/PoliAlerts/assets/mobile-banners/polialerts-buildings-mobile-banner.jpg"
        subtitle="Get started"
        title="See PoliAlerts in action"
        desktopTextWidth="2xl:w-[55%] w-[60%]"
      />

      <section className="px-5 lg:px-10 xl:px-24 lg:my-16 my-8">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Complete the form below to get started
        </h2>
        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem]">
          Fields marked with an asterisk are mandatory.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
