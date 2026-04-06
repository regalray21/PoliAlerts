import Link from "next/link";
import LogoWhite from "./LogoWhite";

function LinkedInIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      style={{ enableBackground: "new 0 0 512 512" } as React.CSSProperties}
      xmlSpace="preserve"
    >
      <style type="text/css">
        {`.footer-li-st0 { fill: white; }`}
      </style>
      <g>
        <path
          className="footer-li-st0"
          d="M419.1,370.2h-3.2v-6.5h4.1c2.1,0,4.5,0.4,4.5,3.1C424.5,369.9,422,370.2,419.1,370.2z"
        />
        <path
          className="footer-li-st0"
          d="M418.9,355.3c-8.7,0.1-15.7,7.4-15.6,16.1s7.4,15.7,16.1,15.6h0.4c8.5-0.2,15.3-7.3,15.1-15.8v-0.3
    C434.9,362.1,427.7,355.1,418.9,355.3z M424.6,380.7l-5.3-8.3l-0.1-0.1h-3.4v8.4H413v-19.2h7.4c4.5,0,6.8,1.8,6.8,5.4
    c0,0.1,0,0.2,0,0.3c0,2.7-1.8,4.9-5.3,4.9l5.7,8.6L424.6,380.7L424.6,380.7z M418.9,355.3c-8.7,0.1-15.7,7.4-15.6,16.1
    s7.4,15.7,16.1,15.6h0.4c8.5-0.2,15.3-7.3,15.1-15.8v-0.3C434.9,362.1,427.7,355.1,418.9,355.3z M424.6,380.7l-5.3-8.3l-0.1-0.1
    h-3.4v8.4H413v-19.2h7.4c4.5,0,6.8,1.8,6.8,5.4c0,0.1,0,0.2,0,0.3c0,2.7-1.8,4.9-5.3,4.9l5.7,8.6L424.6,380.7L424.6,380.7z M256,0
    C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M391.7,368c-0.1,10.7-8.9,19.2-19.6,19.1H146.5
    c-10.7,0.1-19.4-8.4-19.5-19.1V141.6c0.1-10.7,8.9-19.2,19.5-19.1H372l0,0c10.7-0.1,19.5,8.4,19.6,19.1L391.7,368L391.7,368z
     M419.8,389c-10,0.1-18.1-7.9-18.2-17.9s7.9-18.1,17.9-18.2h0.4c9.8,0.1,17.8,8,17.9,17.9C437.8,380.8,429.8,388.9,419.8,389z
     M418.9,355.3c-8.7,0.1-15.7,7.4-15.6,16.1s7.4,15.7,16.1,15.6h0.4c8.5-0.2,15.3-7.3,15.1-15.8v-0.3
    C434.9,362.1,427.7,355.1,418.9,355.3z M424.6,380.7l-5.3-8.3l-0.1-0.1h-3.4v8.4H413v-19.2h7.4c4.5,0,6.8,1.8,6.8,5.4
    c0,0.1,0,0.2,0,0.3c0,2.7-1.8,4.9-5.3,4.9l5.7,8.6L424.6,380.7L424.6,380.7z M305.5,218.5c-15.2-0.6-29.5,7.3-37.1,20.4h-0.5v-17.2
    h-37.6V348h39.2v-62.5c0-16.5,3.1-32.4,23.5-32.4c20.1,0,20.4,18.9,20.4,33.5V348h39.2v-69.3C352.5,244.7,345.2,218.5,305.5,218.5z
     M166.2,348h39.2V221.7h-39.2V348z M185.9,158.9c-12.6,0-22.8,10.2-22.8,22.8s10.2,22.8,22.8,22.8s22.8-10.2,22.8-22.8
    C208.6,169.1,198.4,158.9,185.9,158.9z"
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop Footer                                                     */
/* ------------------------------------------------------------------ */
function DesktopFooter() {
  return (
    <div className="relative lg:block hidden bg-clifford text-white-text px-5 lg:px-10 xl:px-24">
      <footer className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-start py-14">
        <div className="flex flex-col gap-7 -mt-4">
          <LogoWhite />
          <p className="text-sm text-gray-text leading-6">
            1 University Avenue <br /> Toronto, Ontario, Canada <br /> M5J 2P1
          </p>
          <a
            href="https://www.linkedin.com/company/polialerts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon size={30} />
          </a>
        </div>
        <div className="border-t border-white border-opacity-15">
          <ul className="flex flex-col py-5 gap-3">
            <li>
              <p className="uppercase font-semibold text-white-text text-base tracking-widest">
                Get in touch
              </p>
            </li>
            <li>
              <Link
                href="/demo-booking"
                className="text-sm text-gray-text underline hover:no-underline"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-sm text-gray-text underline hover:no-underline"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-sm text-gray-text underline hover:no-underline"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t border-white border-opacity-15 mx-5">
          <ul className="flex flex-col py-5 gap-3">
            <li>
              <p className="uppercase font-semibold text-base tracking-widest">
                Learn More
              </p>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-text underline hover:no-underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-use"
                className="text-sm text-gray-text underline hover:no-underline"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="text-sm text-gray-text underline hover:no-underline"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t border-white border-opacity-15">
          <p className="pt-5 uppercase font-semibold text-base tracking-widest">
            Subscribe to our newsletter
          </p>
          <p className="pt-4 pb-4 text-sm text-gray-text">
            Learn about product updates, feature releases and all other
            PoliAlerts news.
          </p>
          <button className="text-base font-semibold bg-blue-button py-2 px-8 rounded-full hover:bg-white-text hover:text-blue-hover">
            <Link href="/newsletter">Sign up</Link>
          </button>
        </div>
      </footer>
      <hr className="w-[95%] border-white mb-5 border-opacity-15" />
      <p className="text-sm text-gray-text pb-8 pt-3">
        &copy; {new Date().getFullYear()} PoliAlerts. All rights reserved.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile Footer                                                      */
/* ------------------------------------------------------------------ */
function MobileFooter() {
  return (
    <footer className="lg:hidden block bg-clifford py-5 text-white-text px-5 lg:px-10 xl:px-24">
      <div>
        <div className="w-full">
          <div className="my-4 mb-10">
            <LogoWhite />
            <div className="flex w-full gap-5 items-center">
              <p className="text-xs text-gray-text mt-5 !w-[60%] leading-5">
                1 University Avenue <br /> Toronto, Ontario, Canada <br /> M5J
                2P1
              </p>
              <a
                href="https://www.linkedin.com/company/polialerts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={40} />
              </a>
            </div>
          </div>
          <hr className="block mx-auto my-5 border-gray-line" />
          <div className="w-full flex justify-center justify-between mt-6">
            {/* Links Section */}
            <div className="flex flex-row space-x-16">
              {/* Get In Touch */}
              <div className="mb-6 md:mb-0">
                <h3 className="text-sm leading-6 tracking-widest font-semibold mb-5 text-white-text">
                  GET IN TOUCH
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/demo-booking"
                      className="text-xs leading-5 text-gray-text underline hover:no-underline"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-xs leading-5 text-gray-text underline hover:no-underline"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-xs leading-5 text-gray-text underline hover:no-underline"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Learn More */}
              <div>
                <h3 className="text-sm leading-6 tracking-widest font-semibold mb-5 text-white-text">
                  LEARN MORE
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-xs leading-5 text-gray-text underline hover:no-underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="text-xs leading-5 text-gray-text underline hover:no-underline"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="text-xs leading-5 text-gray-text underline hover:no-underline"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="block mx-auto my-5 border-gray-line" />
          <div>
            <h3 className="text-sm leading-6 tracking-widest text-white-text font-semibold mb-5">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-xs text-gray-text leading-5">
              Learn about product updates, feature releases and all other
              PoliAlerts news.
            </p>
            <button className="my-8 w-fit h-fit">
              <Link
                href="/newsletter"
                className="bg-blue-button hover:bg-white hover:text-blue-hover text-white-text px-8 py-3 rounded-full text-base font-semibold"
              >
                Sign up
              </Link>
            </button>
          </div>
        </div>

        <hr className="block mx-auto mb-5 border-gray-line" />
        <p className="text-xs leading-5 text-gray-text">
          &copy; {new Date().getFullYear()} PoliAlerts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
}
