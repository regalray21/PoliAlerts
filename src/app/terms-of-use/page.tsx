import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "PoliAlerts Terms of Use - Read our terms governing access to and use of the PoliAlerts website, web application, and related services.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <div className="px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem]">
        <hr className="w-[100%] lg:border-gray-line lg:mb-5" />
      </div>

      {/* Terms of Use Section */}
      <div className="px-5 lg:px-10 xl:px-24 bg-white my-10">
        <h1 className="text-[2.375rem] leading-[3.25rem] md:text-5xl md:leading-[4rem] font-bold mb-6 md:mb-10 text-black-text">
          Terms of Use
        </h1>
        <p className="mb-6 text-base leading-7 text-clifford">
          These Terms of Use (&quot;Terms&quot;) govern your access to and use
          of the PoliAlerts website, web application, and related services
          (collectively, the &quot;Service&quot;). By using the Service, you
          accept these Terms and our Privacy&nbsp;Policy. If you do not agree,
          please do not use PoliAlerts.
        </p>

        {/* 1 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          1. Eligibility
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          You must be at least 18&nbsp;years old and able to enter into a
          binding contract to use the Service.
        </p>

        {/* 2 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          2. Description of Service
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          PoliAlerts uses automated systems, including artificial-intelligence
          (AI) models, to collect, transcribe, summarise, and deliver publicly
          available information from legislative, regulatory, and news sources.
        </p>

        {/* 3 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          3. AI-Generated Content &amp; No Reliance
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          The data we provide is generated and/or processed by automated systems
          and{" "}
          <strong>may contain errors, omissions, or inaccuracies</strong>. It is
          offered for general information only and{" "}
          <strong>
            must not be relied upon as official, legal, or professional advice
          </strong>
          . Always verify information directly with official government
          publications or other authoritative sources before acting on it.
          PoliAlerts is not liable for any decision made or action taken based on
          our content.
        </p>

        {/* 4 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          4. User Accounts &amp; Security
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          You are responsible for safeguarding your login credentials and for all
          activities that occur under your account. Notify us immediately of any
          unauthorised use.
        </p>

        {/* 5 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          5. Acceptable Use
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          You agree not to violate any law; introduce malware; scrape, resell,
          or commercially exploit the Service without permission; or interfere
          with our systems or other users.
        </p>

        {/* 6 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          6. Intellectual Property
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          All content on the Service is owned by PoliAlerts or its licensors and
          is protected by intellectual-property laws. We grant you a limited,
          non-exclusive, revocable licence to use the Service for your internal
          purposes only.
        </p>

        {/* 7 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          7. Third-Party Content &amp; Links
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          Links to third-party sites are provided for convenience. We do not
          endorse or control third-party content, and your use of it is at your
          own risk.
        </p>

        {/* 8 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          8. Service Availability &amp; Modifications
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          We may modify, suspend, or discontinue any part of the Service at any
          time, including for maintenance or unforeseen outages. We do not
          guarantee that the Service will be uninterrupted, timely, secure, or
          error-free.
        </p>

        {/* 9 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          9. Disclaimer of Warranties
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          The Service is provided &quot;as&nbsp;is&quot; and
          &quot;as&nbsp;available,&quot; without any warranties of any kind,
          whether express or implied.
        </p>

        {/* 10 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          10. Limitation of Liability
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          To the fullest extent permitted by law, PoliAlerts is not liable for
          any indirect, incidental, special, consequential, or punitive damages.
          Our total liability will not exceed the greater
          of&nbsp;CAD&nbsp;$100 or the amount you paid to PoliAlerts in the past
          12&nbsp;months.
        </p>

        {/* 11 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          11. Indemnification
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          You agree to indemnify and hold harmless PoliAlerts and its affiliates
          from any claims or losses arising out of your use of the Service or
          breach of these Terms.
        </p>

        {/* 12 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          12. Changes to Terms
        </h3>
        <p className="mb-6 text-clifford text-base leading-7">
          We may update these Terms at any time. Material changes will be posted
          here or notified by email. Continued use of the Service after changes
          take effect constitutes acceptance of the revised Terms.
        </p>

        {/* 13 */}
        <h3 className="text-base font-bold mb-4 text-black-text">
          13. Governing Law
        </h3>
        <p className="mb-4 text-clifford text-base leading-7">
          These Terms are governed by the laws of the
          Province&nbsp;of&nbsp;Ontario and the federal laws of Canada applicable
          therein. Any dispute will be resolved exclusively in the courts of
          Toronto, Ontario.
        </p>

        <p className="mb-24 text-clifford text-base leading-7">
          Questions? Email&nbsp;us&nbsp;at&nbsp;
          <a
            href="mailto:info@polialerts.com"
            className="text-blue-button underline hover:text-blue-hover hover:no-underline font-semibold"
          >
            info@polialerts.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
