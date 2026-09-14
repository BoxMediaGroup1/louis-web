"use client";

import { Instrument_Serif } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
} from "@/components/product-demo/icons";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/#product-innovation-heading", label: "Product" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1520px] items-center justify-between px-4 sm:h-[72px] sm:px-8 xl:px-12">
        <Link
          href="/"
          className={`${instrumentSerif.className} text-[28px] leading-none tracking-[-0.04em] text-charcoal`}
        >
          Louis
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] tracking-[-0.01em] text-charcoal/80 transition-colors hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-a-demo"
            className="inline-flex h-10 items-center gap-2 rounded-[4px] bg-burgundy-deep px-4 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-burgundy"
          >
            Request a demo
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[4px] text-charcoal lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          {isOpen ? (
            <CloseIcon className="size-5" />
          ) : (
            <MenuIcon className="size-5" />
          )}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-charcoal/10 px-4 py-4 sm:px-8 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-[16px] tracking-[-0.01em] text-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-a-demo"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-[4px] bg-burgundy-deep px-4 text-[14px] font-medium text-white"
            >
              Request a demo
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
