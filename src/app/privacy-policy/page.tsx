import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PoliAlerts Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem]">
        <hr className="w-[100%] lg:border-gray-line lg:mb-5" />
      </div>

      {/* Privacy Policy Section */}
      <div className="px-5 lg:px-10 xl:px-24 bg-white my-10">
        <h1 className="text-[2.375rem] leading-[3.25rem] md:text-5xl md:leading-[4rem] font-bold mb-6 md:mb-10 text-black-text">
          Privacy Policy
        </h1>
        <p className="mb-4 text-base text-black-text">
          <strong>Effective Date: June 12, 2024</strong>
        </p>

        <p className="mb-6 text-base text-clifford leading-7">
          PoliAlerts (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
          committed to protecting the privacy and security of your personal
          information. This Privacy Policy describes how we collect, use, and
          disclose information when you use our website and services.
        </p>

        <h3 className="text-base font-bold mb-4 text-black-text">
          1. Information We Collect
        </h3>
        <p className="mb-4 text-base leading-7 text-clifford">
          1.1 Information You Provide: When you visit our website or use our
          services, we may collect personal information that you voluntarily
          provide to us, such as your name, email address, phone number, and
          company information.
        </p>
        <p className="mb-6 text-base leading-7 text-clifford">
          1.2 Automatically Collected Information: We may also automatically
          collect certain information when you visit our website or use our
          services, such as your IP address, browser type, operating system, and
          device information.
        </p>

        <h3 className="text-base font-bold mb-4 text-black-text">
          2. How We Use Your Information
        </h3>
        <p className="mb-4 text-base leading-7 text-clifford">
          We may use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-6 text-base leading-7 text-clifford">
          <li>To provide and improve our website and services.</li>
          <li>
            To communicate with you about our products, services, and
            promotions.
          </li>
          <li>To respond to your inquiries and requests.</li>
          <li>
            To analyze how users interact with our website and services.
          </li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h3 className="text-base font-bold mb-4 text-black-text">
          3. How We Share Your Information
        </h3>
        <p className="mb-4 text-base leading-7 text-clifford">
          We may share your information with third parties for the following
          purposes:
        </p>
        <ul className="list-disc list-inside mb-6 text-base leading-7 text-clifford">
          <li>
            With service providers who help us operate our website and provide
            our services.
          </li>
          <li>
            With third parties as required by law or to protect our rights.
          </li>
          <li>With your consent or at your direction.</li>
        </ul>

        <h3 className="text-base font-bold mb-4 text-black-text">
          4. Cookies and Similar Technologies
        </h3>
        <p className="mb-6 text-base leading-7 text-clifford">
          We may use cookies and similar technologies to collect information
          about your interactions with our website and services. You can manage
          your cookie preferences through your browser settings.
        </p>

        <h3 className="text-base font-bold mb-4 text-black-text">
          5. Third-Party Links
        </h3>
        <p className="mb-6 text-base leading-7 text-clifford">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these third-party
          websites.
        </p>

        <h3 className="text-base font-bold mb-4 text-black-text">
          6. Data Security
        </h3>
        <p className="mb-6 text-base leading-7 text-clifford">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, and disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>

        <h3 className="text-base font-bold mb-4 text-black-text">
          7. Your Choices
        </h3>
        <p className="mb-6 text-base leading-7 text-clifford">
          You may choose not to provide certain personal information, but this
          may limit your ability to use our website and services.
        </p>

        <h3 className="text-base font-bold mb-4 text-black-text">
          8. Changes to this Privacy Policy
        </h3>
        <p className="mb-6 text-base leading-7 text-clifford">
          We may update this Privacy Policy from time to time. The latest
          Privacy Policy will be on this page.
        </p>

        <h3 className="text-base font-bold mb-4 text-black-text">
          9. Contact Us
        </h3>

        <p className="mb-24 text-base leading-7 text-clifford">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a
            href="mailto:info@polialerts.com"
            className="text-blue-button underline hover:no-underline hover:text-blue-hover font-semibold"
          >
            info@polialerts.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
