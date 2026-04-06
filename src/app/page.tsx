import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Desktop Hero section */}
      <div className="hidden lg:block relative">
        <div className="absolute top-0 text-white-text top-[25%] lg:top-[50%] z-30 2xl:w-[48%] xl:w-[64%] w-[70%] px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem]">
          <h1 className="text-5xl leading-[4rem] font-bold">
            Real-time legislative alerts and policy tracking
          </h1>
          <p className="text-[1.375rem] leading-[2.125rem] my-5">
            Instant policy updates delivered to your inbox
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover w-full h-full"
          src="/assets/home/old-city-hall-toronto-buildlings.png"
          alt="old-city-hall-toronto-buildlings"
        />
      </div>

      {/* Mobile Hero section */}
      <div className="relative md:h-[38rem] h-full w-full lg:hidden block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-full w-full object-cover"
          src="/assets/home/Hero-mobile.png"
          alt="old-city-hall-toronto-buildlings"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-5">
          <h1 className="text-[2.375rem] text-white font-bold leading-[3.25rem] md:text-5xl md:leading-[4rem]">
            Real-time legislative alerts and policy tracking
          </h1>
          <p className="text-lg my-5 text-white leading-[1.875rem]">
            Instant policy updates delivered to your inbox
          </p>
        </div>
      </div>

      {/* Never miss a critical moment */}
      <section className="md:my-16 my-8 h-full px-5 lg:px-10 xl:px-24">
        <h2 className="font-bold text-3xl md:text-[2.125rem] md:leading-[3rem] leading:[2.625rem] mb-5 text-black-text">
          Never miss a critical moment
        </h2>

        <p className="text-sm md:text-base text-clifford md:leading-7 leading-[1.625rem]">
          PoliAlerts delivers cutting-edge, real-time tracking of legislative
          discussions across all levels of government in Canada. Whether you're a
          government relations expert, lobbyist, communications executive, or
          part of an advocacy group, nonprofit organization, legal team, or
          business, our AI-powered solution ensures you stay informed and ahead.
        </p>
      </section>

      {/* Feature icons section */}
      <section className="flex md:flex-row flex-col-reverse gap-5 items-center font-bold">
        <div className="md:w-[48%] w-full rounded-full md:my-0 my-10">
          <div className="rounded-r-full w-[90%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/home/crowd-moving-in-government-building.png"
              alt="crowd-moving-in-government-building"
            />
          </div>
        </div>
        <div className="md:w-[45%] w-full flex flex-col gap-5 md:my-10 my-0 md:px-0 px-5">
          <section className="flex gap-4 items-center">
            <div className="p-4 md:w-[60px] flex justify-center items-center rounded-full bg-background-light-gray md:h-[60px]">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 33.97 33.08"
              >
                <g>
                  <polygon
                    fill="#2468cd"
                    points="18.52 16.46 18.52 8.79 14.61 8.79 14.61 14.16 14.61 18.55 14.61 18.69 19.78 21.74 21.76 18.37 18.52 16.46"
                  />
                  <path
                    fill="#2468cd"
                    d="m21.6,28.25c-.97.42-2,.72-3.08.88v3.95c1.78-.21,3.47-.71,5.04-1.44,0,0-1.96-3.39-1.96-3.39Z"
                  />
                  <path
                    fill="#2468cd"
                    d="m32.13,22.35c.56-1.5.92-3.1,1.02-4.78h-3.91c-.07.97-.27,1.9-.55,2.8l3.43,1.98h0Z"
                  />
                  <path
                    fill="#2468cd"
                    d="m26.96,23.88c-.59.84-1.28,1.61-2.05,2.29l1.98,3.43c1.34-1.06,2.51-2.33,3.47-3.75l-3.4-1.96h0Z"
                  />
                  <path
                    fill="#2468cd"
                    d="m30.12,3.18l-.56,3.09c-3.04-3.82-7.71-6.27-12.96-6.27C7.44,0,0,7.45,0,16.6c0,8.48,6.4,15.49,14.62,16.47v-3.95c-6.06-.96-10.71-6.2-10.71-12.53,0-7,5.7-12.7,12.7-12.7,3.89,0,7.36,1.77,9.68,4.54l-2.97-.54-.7,3.84,9.61,1.74,1.74-9.61-3.84-.7v.02Z"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-xl leading-[1.875rem] md:text-[1.625rem] md:leading-[2.375rem] font-bold text-black-text">
              Instant dialogue tracking
            </h3>
          </section>
          <section className="flex gap-4 items-center">
            <div className="p-4 md:w-[60px] flex justify-center items-center rounded-full bg-background-light-gray md:h-[60px]">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 47 49"
              >
                <g>
                  <polygon
                    fill="#2468cd"
                    points="18 3.5 18 0 7.58 0 7.58 3.5 0 3.5 0 9.5 7.58 9.5 7.58 13 18 13 18 9.5 47 9.5 47 3.5 18 3.5"
                  />
                  <polygon
                    fill="#2468cd"
                    points="38 18 27.58 18 27.58 21.5 0 21.5 0 27.5 27.58 27.5 27.58 31 38 31 38 27.5 47 27.5 47 21.5 38 21.5 38 18"
                  />
                  <polygon
                    fill="#2468cd"
                    points="25 36 14.58 36 14.58 39.5 0 39.5 0 45.5 14.58 45.5 14.58 49 25 49 25 45.5 47 45.5 47 39.5 25 39.5 25 36"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-xl leading-[1.875rem] md:text-[1.625rem] md:leading-[2.375rem] font-bold text-black-text">
              Customizable keywords and phrases
            </h3>
          </section>
          <section className="flex gap-4 items-center">
            <div className="p-4 md:w-[60px] flex justify-center items-center rounded-full bg-background-light-gray md:h-[60px]">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55.46 50.87"
              >
                <g>
                  <path
                    fill="#2468cd"
                    d="m53.92,17.38L29.76.63c-1.22-.84-2.85-.84-4.07,0L1.54,17.38c-1.29.89-1.84,2.5-1.37,4,.47,1.5,1.84,2.5,3.4,2.5h5.16v21H1.73v6h52v-6h-7v-21h5.16c1.57,0,2.94-1.01,3.4-2.5.47-1.5-.08-3.1-1.37-4ZM27.73,6.52l16.38,11.35H11.35L27.73,6.52Zm2.33,17.35v21h-4.67v-21h4.67Zm-15.33,0h4.67v21h-4.67v-21Zm26,21h-4.67v-21h4.67v21Z"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-xl leading-[1.875rem] md:text-[1.625rem] md:leading-[2.375rem] font-bold text-black-text">
              Local, provincial and federal coverage
            </h3>
          </section>
          <section className="flex gap-4 items-center">
            <div className="p-5 md:w-[60px] flex justify-center items-center rounded-full bg-background-light-gray md:h-[60px]">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32.55 24.87"
              >
                <g>
                  <path
                    fill="#2468cd"
                    d="m2.93,2.01C4.02.91,5.85,0,7.86,0c1.83,0,3.29.55,4.57,1.83,1.1,1.28,1.83,2.93,1.83,4.57,0,3.47-2.56,6.03-5.85,6.4-1.28.18-2.56,0-3.47-.55.37,2.74,1.65,6.95,7.68,10.24l-1.65,2.38C4.57,21.94,0,16.28,0,9.87c0-3.66,1.1-5.85,2.93-7.86h0Zm18.29,0C22.31.91,24.14,0,26.15,0c1.83,0,3.47.55,4.57,1.83s1.83,2.93,1.83,4.57c0,3.47-2.56,6.03-5.85,6.4-1.28.18-2.56,0-3.47-.55.37,2.74,1.65,6.95,7.68,10.24l-1.65,2.38c-6.4-2.93-10.97-8.59-10.97-15,0-3.66,1.1-5.85,2.93-7.86h0Z"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-xl leading-[1.875rem] md:text-[1.625rem] md:leading-[2.375rem] font-bold text-black-text">
              Immediate access to full transcripts
            </h3>
          </section>

          <section className="group flex gap-5 items-center mt-4">
            <div className="w-[10px] flex justify-center items-center rounded-full bg-blue-button group-hover:bg-blue-hover group-hover:translate-x-[0.9rem] duration-500 h-[10px]"></div>
            <div className="text-blue-button text-base font-semibold">
              <Link
                className="underline group-hover:no-underline group-hover:text-blue-hover duration-500"
                href="/features"
              >
                See all features
              </Link>
            </div>
          </section>
        </div>
      </section>

      {/* WEB VERSION - How it Works Section lg:block */}
      <section className="h-fit lg:h-[70rem]">
        <div className="relative lg:block hidden mt-[33rem] w-full 2xl:h-fit lg:h-screen">
          <div className="bg-background-light-gray -top-[25rem] absolute rounded-r-full w-full h-fit z-20 py-24">
            <div className="flex gap-1 w-full items-center">
              <div className="flex w-[80%] justify-center items-start h-full flex-col gap-3 px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem]">
                <h4 className="text-base text-clifford font-semibold tracking-widest leading-7">
                  HOW IT WORKS
                </h4>
                <h2 className="text-black-text font-bold md:text-[2.125rem] leading-[3rem]">
                  AI-driven intelligence, <br /> tailored to you
                </h2>
                <p className="text-clifford text-base leading-7 2xl:w-[80%]">
                  Leverage the power of advanced AI technology to monitor
                  keywords in real-time across legislative sessions and
                  committees. Receive immediate alerts on critical discussions
                  and customize your tracking to meet your specific needs. Save
                  time and enhance your strategy with up-to-the-minute insights
                  that give you a competitive edge.
                </p>
                <section className="group flex gap-3 items-center">
                  <div className="w-[10px] flex justify-center items-center rounded-full bg-blue-button group-hover:bg-blue-hover group-hover:translate-x-[0.6rem] duration-500 h-[10px]"></div>
                  <div>
                    <Link
                      className="underline group-hover:no-underline group-hover:text-blue-hover text-base text-blue-button font-semibold duration-500"
                      href="/pricing"
                    >
                      Learn about our packages
                    </Link>
                  </div>
                </section>
              </div>
              <div className="relative w-[70%] 2xl:w-[60%]">
                <div className="absolute -top-[20rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="2xl:w-[86%] w-[83%] h-[80%]"
                    src="/assets/home/rows-of-chairs-in-legislature.png"
                    alt="rows-of-chairs-in-legislature"
                  />
                </div>
              </div>
            </div>
            <div className="mt-24 py-5">
              <div className="grid grid-cols-3 xl:w-fit 2xl:w-full 2xl:gap-5 px-5 lg:px-10 xl:pl-24 xl:pr-24 2xl:pr-36">
                <div className="2xl:w-full xl:w-[90%] w-[18.5rem]">
                  <h3 className="text-[1.625rem] leading-[2.375rem] font-bold mb-4 text-black-text">
                    Stay updated, shape policy
                  </h3>
                  <p className="text-clifford text-base leading-7">
                    Stay connected to emerging policy discussions and the
                    legislators behind them. PoliAlerts keeps you informed and
                    empowers you to influence decisions.
                  </p>
                </div>
                <div className="2xl:w-full xl:w-[90%] w-[18.5rem]">
                  <h3 className="text-[1.625rem] leading-[2.375rem] font-bold mb-4 text-black-text">
                    Unparalleled speed
                  </h3>
                  <p className="text-clifford text-base leading-7">
                    Eliminate the tedious manual work of committee session
                    monitoring. PoliAlerts sends instant notifications when
                    relevant discussions occur, complete with full transcripts
                    for valuable conversation context.
                  </p>
                </div>
                <div className="2xl:w-full xl:w-[90%] w-[18.5rem] break-words text-left">
                  <h3 className="text-[1.625rem] leading-[2.375rem] font-bold mb-4 text-black-text">
                    Fully customizable
                  </h3>
                  <p className="text-clifford text-base leading-7">
                    Tailor your monitoring experience through our user-friendly
                    dashboard. Select specific keywords, phrases, and committees
                    to monitor, and decide who receives notifications and when.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="z-10 h-[70rem] object-cover w-full"
              src="/assets/home/architectural-close-up-view-of-building.png"
              alt="architectural-close-up-view-of-building"
            />
            <div className="left-[40%] my-4 absolute 2xl:top-[55%] xl:top-[55%] lg:top-[60%] z-50">
              <div className="lg:w-[90%] 2xl:w-[70%]">
                <h1 className="text-5xl leading-[4rem] font-bold text-white-text">
                  Be the smartest person in the room with PoliAlerts
                </h1>
                <p className="text-base leading-7 my-5 text-white-text">
                  Reach out today to find out how PoliAlerts can enhance your
                  policy and communication strategies.
                </p>
                <button className="bg-white py-4 text-base text-blue-hover font-semibold px-8 rounded-full hover:bg-transparent hover:border hover:border-white-text hover:text-white-text">
                  <a
                    href="https://calendly.com/polialerts-info/polialerts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE VERSION - How it Works + CTA */}
      <section className="mobile lg:hidden block mt-5">
        <div className="flex flex-col px-5 py-8 gap-5 bg-background-light-gray">
          <h4 className="text-xs leading-6 text-clifford font-semibold tracking-widest">
            HOW IT WORKS
          </h4>
          <h2 className="font-bold mb-2 text-black-text text-3xl leading-[2.625rem]">
            AI-driven intelligence, tailored to you
          </h2>
          <p className="text-sm text-clifford leading-[1.375rem]">
            Leverage the power of advanced AI technology to monitor keywords in
            real-time across legislative sessions and committees. Receive
            immediate alerts on critical discussions and customize your tracking
            to meet your specific needs. Save time and enhance your strategy with
            up-to-the-minute insights that give you a competitive edge.
          </p>

          <section className="group flex gap-3 items-center">
            <div className="w-[10px] flex justify-center items-center rounded-full bg-blue-button group-hover:bg-blue-hover group-hover:translate-x-[0.6rem] duration-500 h-[10px]"></div>
            <div>
              <Link
                className="underline group-hover:no-underline group-hover:text-blue-hover duration-500 text-blue-button text-base font-semibold"
                href="/pricing"
              >
                Learn about our packages
              </Link>
            </div>
          </section>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="my-4 w-[90%] h-[90%] md:w-[50%] md:h-[50%] mx-auto"
            src="/assets/home/rows-of-chairs-in-legislature.png"
            alt="rows-of-chairs-in-legislature"
          />

          <div className="mt-5">
            <h3 className="text-[1.375rem] leading-[1.875rem] font-bold mb-2 text-black-text">
              Stay updated, shape policy
            </h3>
            <p className="text-sm leading-[1.375rem] text-clifford mb-5">
              Stay connected to emerging policy discussions and the legislators
              behind them. PoliAlerts keeps you informed and empowers you to
              influence decisions.
            </p>
          </div>
          <div>
            <h3 className="text-[1.375rem] leading-[1.875rem] font-bold mb-2 text-black-text">
              Unparalleled speed
            </h3>
            <p className="text-sm leading-[1.375rem] text-clifford mb-5">
              Eliminate the tedious manual work of committee session monitoring.
              PoliAlerts sends instant notifications when relevant discussions
              occur, complete with full transcripts for valuable conversation
              context.
            </p>
          </div>
          <div>
            <h3 className="text-[1.375rem] leading-[1.875rem] font-bold mb-2 text-black-text">
              Fully customizable
            </h3>
            <p className="text-sm leading-[1.375rem] text-clifford mb-5">
              Tailor your monitoring experience through our user-friendly
              dashboard. Select specific keywords, phrases, and committees to
              monitor, and decide who receives notifications and when.
            </p>
          </div>
        </div>

        {/* Mobile bottom CTA */}
        <div className="relative md:h-[38rem] h-full w-full lg:hidden block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-full w-full object-cover"
            src="/assets/home/Bottom-mobile.png"
            alt="old-city-hall-toronto-buildlings"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-5">
            <h1 className="text-[2.375rem] text-white font-bold leading-[3.25rem] md:text-5xl md:leading-[4rem]">
              Be the smartest person in the room with PoliAlerts
            </h1>
            <p className="text-lg my-5 text-white-text leading-[1.875rem]">
              Reach out today to find out how PoliAlerts can enhance your policy
              and communication strategies.
            </p>
            <button className="text-black-text text-base font-semibold bg-white w-fit py-4 px-8 rounded-full hover:bg-transparent hover:border hover:border-white hover:text-white">
              <a
                href="https://calendly.com/polialerts-info/polialerts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
