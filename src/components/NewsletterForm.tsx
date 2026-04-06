"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateForm(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const newErrors: Record<string, string> = {};

    const firstName = (form.elements.namedItem("first name") as HTMLInputElement)?.value.trim();
    const lastName = (form.elements.namedItem("last name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();

    if (!firstName) newErrors.firstName = "Please complete the field";
    if (!lastName) newErrors.lastName = "Please complete the field";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email address";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
    }
  }

  return (
    <form
      action="https://formspree.io/f/xdknbrao"
      method="POST"
      onSubmit={validateForm}
    >
      <div className="grid md:grid-cols-2 md:gap-x-24 gap-y-5 gap-x-10 grid-cols-1 my-5">
        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-5 mb-4 text-clifford"
            htmlFor="name"
          >
            First Name*
          </label>
          <input
            className={`rounded-full w-full py-2 px-3 border ${errors.firstName ? "border-warn" : "border-blue-button"}`}
            name="first name"
            id="name"
            type="text"
          />
          {errors.firstName && (
            <p className="text-warn text-base my-2">{errors.firstName}</p>
          )}
        </section>

        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-5 mb-4 text-clifford"
            htmlFor="lastname"
          >
            Last Name*
          </label>
          <input
            className={`rounded-full w-full py-2 px-3 border ${errors.lastName ? "border-warn" : "border-blue-button"}`}
            name="last name"
            id="lastname"
            type="text"
          />
          {errors.lastName && (
            <p className="text-warn text-base my-2">{errors.lastName}</p>
          )}
        </section>

        <section>
          <label
            className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-8 mb-4 text-clifford"
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

      <button
        type="submit"
        className="flex my-8 mb-8 justify-start rounded-full w-fit py-3 px-14 bg-blue-button text-white-text hover:bg-blue-hover text-base font-semibold"
      >
        Subscribe
      </button>
    </form>
  );
}
