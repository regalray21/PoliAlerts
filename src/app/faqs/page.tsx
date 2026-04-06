import type { Metadata } from "next";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "PoliAlerts FAQs | Answers on Poli Alerts and Government Tracking in Canada",
  description:
    "Get answers to frequently asked questions about PoliAlerts. Learn how to use Poli Alerts for government tracking and transcripts in Toronto, Ontario, Alberta, Ottawa, and Vancouver. Stay informed on committee activities across Canada.",
};

const faqItems = [
  {
    question: "What is PoliAlerts?",
    answer: (
      <p>
        PoliAlerts is a real-time legislative tracking and media monitoring
        service designed to keep you informed about policy discussions across
        various government levels.
      </p>
    ),
  },
  {
    question: "How does PoliAlerts work?",
    answer: (
      <>
        <p>
          Our AI-driven platform monitors keywords and phrases in legislative
          discussions, providing you with real-time alerts and access to full
          transcripts.
        </p>
        <p className="mt-3">
          With the help of our technology partner,{" "}
          <a
            href="https://deepgram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-clifford hover:no-underline"
          >
            Deepgram
          </a>
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.datocms-assets.com/96965/1683539914-logo.svg"
          alt="Deepgram Logo"
          className="mt-3 h-8"
        />
      </>
    ),
  },
  {
    question: "What are the benfits of using PoliAlerts?",
    answer: (
      <p>
        Stay ahead of policy changes, save time on manual monitoring, and ensure
        you never miss critical discussions.
      </p>
    ),
  },
  {
    question: "Can I customize my alerts?",
    answer: (
      <p>
        Yes, you can customize your alerts based on specific keywords, phrases,
        and legislative bodies.
      </p>
    ),
  },
  {
    question: "Who is it for?",
    answer: (
      <p>
        PoliAlerts services professionals in the policy and advocacy space,
        communications and media industries and more.
      </p>
    ),
  },
  {
    question: "How do I get started with  PoliAlerts?",
    answer: (
      <p>
        <Link
          className="underline font-semibold text-clifford hover:no-underline"
          href="/demo-booking"
        >
          Sign up for a plan
        </Link>
        , customize your monitoring preferences, and start receiving real-time
        updates.
      </p>
    ),
  },
];

export default function FaqsPage() {
  return (
    <>
      <HeroBanner
        desktopImage="/assets/faq/FAQheroimage.png"
        mobileImage="/assets/mobile-banners/polialerts-faq-mobile-banner.jpg"
        subtitle="ABOUT POLIALERTS"
        title="Frequently asked questions"
        desktopTextWidth="2xl:w-[45%] w-[50%]"
      />

      <section className="px-5 lg:px-10 xl:px-24 lg:my-16 my-8">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading-[2.625rem] text-black-text lg:mb-14 mb-8">
          Learn more about PoliAlerts below
        </h2>
        <FaqAccordion items={faqItems} />
      </section>
    </>
  );
}
