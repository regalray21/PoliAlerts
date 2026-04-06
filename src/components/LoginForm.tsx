"use client";

import { useState } from "react";
import Link from "next/link";

function EyeHiddenIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      className="absolute top-[0.3rem] z-[10] p-[5px] right-2 rounded-full bg-stone-200 cursor-pointer"
      width="25"
      height="25"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <style>{`.login-cls-1 { fill: #6f6f6f; stroke-width: 0px; }`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="hide">
          <path
            className="login-cls-1"
            d="M502.6,223.3c-41.5-40.6-136.3-119.6-246.6-119.6-25.8.2-51.4,4.2-76,12l36.1,36.1c52.5-22,113,2.7,135,55.2,10.7,25.5,10.7,54.3,0,79.9l56.9,56.9c41.3-24.5,74.3-53.5,94.6-73.4,12.5-12.4,12.5-34.8,0-47.1h0Z"
          />
          <path
            className="login-cls-1"
            d="M256,174.7c-5.2,0-10.3.6-15.4,1.6l85.9,85.9c8.5-38.9-16.2-77.4-55.2-85.9-5-1.1-10.1-1.6-15.3-1.6h0Z"
          />
          <path
            className="login-cls-1"
            d="M73.5,63.4c-9.6-9.6-25.1-9.6-34.7,0-9.6,9.6-9.6,25.1,0,34.7l57,56.9c-37.5,23.4-67.5,49.9-86.4,68.4-12.6,12.3-12.6,34.7,0,47,41.4,40.5,136.3,119.5,246.6,119.5,22.2-.1,44.3-3.1,65.8-9l67.7,67.7c9.6,9.6,25.1,9.6,34.7,0s9.6-25.1,0-34.7L73.5,63.4ZM256,350c-57,0-103.2-46.2-103.1-103.2,0-10.2,1.5-20.4,4.5-30.2l26.6,26.6c-.1,1.2-.1,2.5-.1,3.7,0,39.8,32.3,72.1,72.1,72.1s2.5,0,3.7-.1l26.6,26.6c-9.8,2.9-20,4.5-30.3,4.5h0Z"
          />
        </g>
      </g>
    </svg>
  );
}

function EyeVisibleIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      className="absolute top-[0.3rem] z-[10] p-[5px] right-2 rounded-full bg-stone-200 cursor-pointer"
      width="25"
      height="25"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 512 512"
    >
      <defs>
        <style>{`.login-cls-1 { fill: #6f6f6f; stroke-width: 0px; }`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="view">
          <path
            className="login-cls-1"
            d="M502.6,232.5c-41.5-40.6-136.3-119.6-246.6-119.6S50.8,191.9,9.4,232.5c-12.6,12.3-12.6,34.7,0,47,41.4,40.6,136.3,119.6,246.6,119.6s205.1-79,246.6-119.6c12.5-12.3,12.5-34.7,0-47ZM256,359.2c-57,0-103.2-46.2-103.2-103.2s46.2-103.1,103.2-103.1,103.1,46.1,103.1,103.1-46.2,103.1-103.1,103.2Z"
          />
          <circle className="login-cls-1" cx="256" cy="256" r="72.1" />
        </g>
      </g>
    </svg>
  );
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex flex-col justify-center items-center my-16">
      <div className="lg:w-[40%] md:w-[50%] w-[90%] rounded-xl mx-auto bg-background-light-gray">
        <div className="md:p-16 p-10">
          <h1 className="text-[2.375rem] leading-[3.25rem] md:text-5xl md:leading-[4rem] font-bold text-black-text mb-4">
            Log in
          </h1>
          <form action="https://my.polialerts.com/" method="POST">
            <div className="flex flex-col gap-3">
              <div>
                <label
                  className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-4 mb-4 text-clifford"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="rounded-full w-full py-2 outline-none px-3 border-blue-button border"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-sm md:text-base md:leading-7 leading-[1.625rem] mt-5 mb-4 text-clifford"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="rounded-full relative w-full border-blue-button border mb-3">
                  <input
                    className="w-full rounded-full h-full outline-none py-2 px-3"
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                  />
                  {showPassword ? (
                    <EyeVisibleIcon onClick={togglePasswordVisibility} />
                  ) : (
                    <EyeHiddenIcon onClick={togglePasswordVisibility} />
                  )}
                </div>
                <a className="text-blue-button underline font-semibold w-fit text-base hover:no-underline hover:text-blue-hover cursor-pointer">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="mt-8 flex my-2 justify-start rounded-full w-fit py-3 px-14 bg-blue-button text-base font-semibold text-white-text hover:bg-blue-hover"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-base bg-white-text mx-auto text-center my-8">
        <span className="text-clifford">Don&apos;t have an account? </span>
        <span className="text-blue-button">
          <Link
            className="underline hover:no-underline hover:text-blue-hover font-semibold"
            href="/demo-booking"
          >
            Contact us
          </Link>
        </span>
      </div>
    </section>
  );
}
