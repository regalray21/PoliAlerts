import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title:
    "PoliAlerts Newsletter | Subscribe to Government Tracking Updates in Canada",
  description:
    "Subscribe to the PoliAlerts newsletter for product updates, feature releases, and all other PoliAlerts news. Stay informed on government tracking across Ontario, Toronto, Ottawa, Alberta, and Vancouver.",
};

export default function NewsletterPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/PoliAlerts/assets/bookademo/toronto-city-hall-buildings-from-below.png"
        mobileImage="/PoliAlerts/assets/mobile-banners/polialerts-buildings-mobile-banner.jpg"
        subtitle="SIGN UP"
        title="Subscribe to our newsletter"
        desktopTextWidth="2xl:w-[45%] w-[50%]"
      />

      <section className="px-5 lg:px-10 xl:px-24 lg:my-16 my-8">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text mb-5">
          Join our community
        </h2>
        <NewsletterForm />
      </section>
    </>
  );
}
