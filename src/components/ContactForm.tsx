"use client";

import { useState } from "react";

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateForm(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const newErrors: Record<string, string> = {};

    const name = (form.elements.namedItem("full name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem("phone number") as HTMLInputElement)?.value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value.trim();

    if (!name) newErrors.name = "Please complete the field";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email address";
    if (!phone) newErrors.phone = "Please complete the field";
    if (!company) newErrors.company = "Please complete the field";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
    }
  }

  return (
    <form
      action="https://formspree.io/f/mqaznvee"
      method="POST"
      onSubmit={validateForm}
    >
      <div className="grid md:grid-cols-2 md:gap-x-24 gap-y-5 gap-x-10 grid-cols-1 my-5">
        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-5 mb-4 text-clifford"
            htmlFor="name"
          >
            Full name*
          </label>
          <input
            className={`rounded-full w-full py-2 px-3 border outline-none ${errors.name ? "border-warn" : "border-blue-button"}`}
            name="full name"
            id="name"
            type="text"
          />
          {errors.name && (
            <p className="text-warn text-base my-2">{errors.name}</p>
          )}
        </section>

        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-5 mb-4 text-clifford"
            htmlFor="email"
          >
            Email address*
          </label>
          <input
            className={`rounded-full w-full py-2 px-3 border ${errors.email ? "border-warn" : "border-blue-button"}`}
            name="email"
            id="email"
            type="email"
          />
          {errors.email && (
            <p className="text-warn text-base my-2">{errors.email}</p>
          )}
        </section>

        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-8 mb-4 text-clifford"
            htmlFor="phone"
          >
            Phone number*
          </label>
          <input
            className={`rounded-full w-full py-2 px-3 border ${errors.phone ? "border-warn" : "border-blue-button"}`}
            name="phone number"
            id="phone"
            type="text"
          />
          {errors.phone && (
            <p className="text-warn text-base my-2">{errors.phone}</p>
          )}
        </section>

        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-8 mb-4 text-clifford"
            htmlFor="company"
          >
            Company/organization*
          </label>
          <input
            className={`rounded-full w-full py-2 px-3 border ${errors.company ? "border-warn" : "border-blue-button"}`}
            name="company"
            id="company"
            type="text"
          />
          {errors.company && (
            <p className="text-warn text-base my-2">{errors.company}</p>
          )}
        </section>

        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-8 mb-4 text-clifford"
            htmlFor="teamSize"
          >
            Organization or team size
          </label>
          <input
            className="rounded-full w-full py-2 px-3 border border-blue-button"
            name="team size"
            id="teamSize"
            type="text"
          />
        </section>

        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-8 mb-4 text-clifford"
            htmlFor="interest"
          >
            Primary areas of interest
          </label>
          <input
            className="rounded-full w-full py-2 px-3 border border-blue-button"
            name="interest"
            id="interest"
            type="text"
          />
        </section>
      </div>

      <section>
        <label
          className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-12 mb-4 text-clifford"
          htmlFor="message"
        >
          Your message
        </label>
        <textarea
          rows={7}
          className="rounded-xl w-full py-2 px-3 border border-blue-button outline-none"
          name="message"
          id="message"
        />
      </section>

      <div className="flex gap-4 md:flex-row flex-col my-8">
        <button
          type="submit"
          className="flex justify-start rounded-full w-fit py-3 px-14 bg-blue-button text-white-text hover:bg-blue-hover text-base font-semibold"
        >
          Send message
        </button>

        <a
          href="https://calendly.com/polialerts-info/polialerts"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-start rounded-full w-fit py-3 px-14 border border-blue-button text-blue-button font-semibold"
        >
          Book a demo
        </a>
      </div>
    </form>
  );
}
