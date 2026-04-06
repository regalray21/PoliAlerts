"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import LockIcon from "./LockIcon";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Who Is It For", href: "/who-is-it-for" },
];

const SUBPAGE_PATHS = [
  "/features",
  "/pricing",
  "/how-it-works",
  "/who-is-it-for",
  "/faqs",
  "/demo-booking",
  "/careers",
  "/support",
  "/newsletter",
];

const SIMPLE_PATHS = ["/login", "/privacy-policy", "/terms-of-use"];

type Variant = "home" | "subpage" | "simple";

function getVariant(pathname: string): Variant {
  if (pathname === "/") return "home";
  if (SIMPLE_PATHS.includes(pathname)) return "simple";
  if (SUBPAGE_PATHS.includes(pathname)) return "subpage";
  return "subpage";
}

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      width="30"
      className="inline cursor-pointer lg:hidden block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#2468cd"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function NavLinks({
  pathname,
  variant,
  onLinkClick,
  lgMx,
}: {
  pathname: string;
  variant: Variant;
  onLinkClick?: () => void;
  lgMx: string;
}) {
  return (
    <>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              className={`text-[1.125rem] lg:text-base font-semibold ${lgMx} lg:my-0 my-5 w-fit block border-b duration-500 ${
                isActive
                  ? "border-b-blue-button text-blue-button"
                  : "border-b-transparent hover:border-b-blue-button hover:text-blue-button"
              }`}
              href={link.href}
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
      <div className="flex changeFlex items-center lg:my-0 my-5 gap-4">
        <a
          className="text-[1.125rem] lg:text-base px-8 py-3 w-fit h-fit bg-blue-button text-white-text font-semibold rounded-full hover:bg-blue-hover duration-500"
          href="https://calendly.com/polialerts-info/polialerts"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick}
        >
          Book a demo
        </a>
        <li>
          <a
            className="lg:px-0 px-8 py-3 flex items-center font-semibold rounded-full lg:border-none border border-blue-button border-rounded"
            href="https://my.polialerts.com/"
            onClick={onLinkClick}
          >
            <LockIcon />
            <p
              className={`text-[1.125rem] lg:text-base font-semibold border-b duration-500 ${
                pathname === "/login"
                  ? "border-b-blue-button text-blue-button"
                  : "border-b-transparent hover:border-b-blue-button hover:text-blue-button"
              }`}
            >
              Log in
            </p>
          </a>
        </li>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Header1 - floating rounded navbar (home default + simple variant)  */
/* ------------------------------------------------------------------ */
function Header1Nav({
  pathname,
  variant,
  mobileOpen,
  setMobileOpen,
  menuRef,
  hamburgerRef,
}: {
  pathname: string;
  variant: Variant;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  hamburgerRef: React.RefObject<SVGSVGElement | null>;
}) {
  const isSimple = variant === "simple";

  return (
    <section
      className={
        isSimple
          ? "w-full lg:shadow-none shadow-sm lg:mx-auto top-0 z-[60]"
          : "lg:fixed w-full shadow-sm px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem] top-5 z-[60] lg:opacity-[.9]"
      }
    >
      <nav
        className={
          isSimple
            ? "mobileNav flex lg:flex-none items-center justify-between w-full py-3 lg:py-0 xl:rounded-full bg-white-text"
            : "mobileNav flex lg:flex-none items-center justify-between w-full py-3 lg:py-0 lg:px-6 lg:rounded-full bg-white"
        }
      >
        <div className={isSimple ? "pl-5 lg:pl-10 xl:pl-24" : ""}>
          <Link href="/">
            <Logo className={isSimple ? "" : "lg:px-5 w-full h-full"} />
          </Link>
        </div>

        <div className={isSimple ? "" : ""}>
          {isSimple ? (
            <a
              className="hideButton inline mx-3 font-semibold cursor-pointer lg:hidden block text-sm text-black-text hover:underline"
              href="https://calendly.com/polialerts-info/polialerts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
            </a>
          ) : (
            <a
              className="hideButton inline mx-3 font-semibold cursor-pointer lg:hidden block text-sm text-black-text hover:underline"
              href="https://calendly.com/polialerts-info/polialerts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
            </a>
          )}
          <svg
            ref={hamburgerRef as React.RefObject<SVGSVGElement>}
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            className={`inline cursor-pointer lg:hidden block ${isSimple ? "mr-5" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#2468cd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <div
          ref={menuRef}
          className={`${
            mobileOpen ? "" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto ${
            isSimple
              ? "pr-5 lg:pr-10 xl:pr-[4.75rem] lg:px-4"
              : "lg:px-5"
          }`}
        >
          <hr className="w-[100vw] lg:hidden border-gray-line mx-[-50vw] left-[50%] relative" />
          <ul className="font-semibold text-base gap-4 lg:flex items-center lg:justify-between py-3 lg:py-5 lg:relative absolute lg:z-[0] z-[100] bg-white w-full left-0 px-5">
            <NavLinks
              pathname={pathname}
              variant={variant}
              onLinkClick={() => setMobileOpen(false)}
              lgMx={isSimple ? "lg:mx-4" : "lg:mx-3"}
            />
          </ul>
        </div>
      </nav>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Header2 - full width fixed navbar (subpage + home after scroll)    */
/* ------------------------------------------------------------------ */
function Header2Nav({
  pathname,
  variant,
  mobileOpen,
  setMobileOpen,
  menuRef,
  hamburgerRef,
  hidden,
}: {
  pathname: string;
  variant: Variant;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  hamburgerRef: React.RefObject<SVGSVGElement | null>;
  hidden?: boolean;
}) {
  return (
    <section
      className={`${
        hidden ? "hidden" : ""
      } fixed w-full shadow-sm lg:mx-auto top-0 z-[60]`}
    >
      <nav className="mobileNav flex lg:flex-none items-center justify-between w-full py-3 lg:py-0 bg-white-text">
        <div className="pl-5 lg:pl-10 xl:pl-24">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <a
            className="hideButton inline mx-3 sm:mx-5 font-semibold cursor-pointer lg:hidden block text-sm text-black-text hover:underline"
            href="https://calendly.com/polialerts-info/polialerts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a demo
          </a>
          <svg
            ref={hamburgerRef as React.RefObject<SVGSVGElement>}
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            className="inline mr-4 cursor-pointer lg:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#2468cd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <div
          ref={menuRef}
          className={`${
            mobileOpen ? "" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto lg:pr-10 xl:pr-[4.75rem] lg:px-4`}
        >
          <hr className="w-[100vw] lg:hidden border-gray-line mx-[-50vw] left-[50%] relative" />
          <ul className="font-semibold text-base gap-4 lg:flex items-center lg:justify-between py-3 lg:py-5 lg:relative absolute lg:z-[0] z-[100] bg-white w-full left-0 px-5">
            <NavLinks
              pathname={pathname}
              variant={variant}
              onLinkClick={() => setMobileOpen(false)}
              lgMx="lg:mx-4"
            />
          </ul>
        </div>
      </nav>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Main Header component                                              */
/* ------------------------------------------------------------------ */
export default function Header() {
  const pathname = usePathname();
  const variant = getVariant(pathname);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<SVGSVGElement>(null);

  // Close mobile menu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Scroll and resize listeners for home variant
  useEffect(() => {
    if (variant !== "home") return;

    function handleScroll() {
      if (window.innerWidth > 1024) {
        setScrolledPast(window.scrollY > 500);
      }
    }

    function handleResize() {
      if (window.innerWidth <= 1024) {
        setScrolledPast(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [variant]);

  // Reset mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* ---------- HOME: two navbars, swap on scroll ---------- */
  if (variant === "home") {
    return (
      <>
        {/* Header1: visible by default, hidden after scroll on lg */}
        <div className={scrolledPast ? "lg:hidden" : ""}>
          <Header1Nav
            pathname={pathname}
            variant={variant}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            menuRef={menuRef}
            hamburgerRef={hamburgerRef}
          />
        </div>
        {/* Header2: hidden by default, shown after scroll on lg */}
        <div className={scrolledPast ? "" : "lg:hidden"}>
          <Header2Nav
            pathname={pathname}
            variant={variant}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            menuRef={menuRef}
            hamburgerRef={hamburgerRef}
            hidden={!scrolledPast && typeof window !== "undefined" && window.innerWidth > 1024}
          />
        </div>
      </>
    );
  }

  /* ---------- SUBPAGE: header2 style, fixed ---------- */
  if (variant === "subpage") {
    return (
      <Header2Nav
        pathname={pathname}
        variant={variant}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        menuRef={menuRef}
        hamburgerRef={hamburgerRef}
      />
    );
  }

  /* ---------- SIMPLE: header1 style, not fixed ---------- */
  return (
    <Header1Nav
      pathname={pathname}
      variant={variant}
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}
      menuRef={menuRef}
      hamburgerRef={hamburgerRef}
    />
  );
}
