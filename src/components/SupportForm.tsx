"use client";

import { useState } from "react";

export default function SupportForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateForm(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const newErrors: Record<string, string> = {};

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const inquiry = (form.elements.namedItem("inquiry") as HTMLTextAreaElement)?.value.trim();

    if (!name) newErrors.name = "Please complete the field";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email address";
    if (!inquiry) newErrors.inquiry = "Please complete the field";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
    }
  }

  return (
    <form
      action="https://formspree.io/f/xanwvgqn"
      method="POST"
      onSubmit={validateForm}
    >
      <div className="grid md:grid-cols-2 md:gap-x-24 gap-y-5 gap-x-10 grid-cols-1 my-5">
        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-5 mb-4 text-clifford"
            htmlFor="name"
          >
            Name*
          </label>
          <input
            className={`rounded-full w-full py-2 px-3 border ${errors.name ? "border-warn" : "border-blue-button"}`}
            name="name"
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
      </div>

      <section>
        <label
          className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-8 mb-4 text-clifford"
          htmlFor="message"
        >
          Inquiry*
        </label>
        <textarea
          rows={7}
          className="rounded-xl w-full py-2 px-3 border border-blue-button outline-none"
          name="inquiry"
          id="message"
        />
        {errors.inquiry && (
          <p className="text-warn text-base my-2">{errors.inquiry}</p>
        )}
      </section>

      <button
        type="submit"
        className="flex my-8 mb-8 justify-start rounded-full w-fit py-3 px-14 bg-blue-button text-white-text hover:bg-blue-hover text-base font-semibold"
      >
        Submit
      </button>
    </form>
  );
}
