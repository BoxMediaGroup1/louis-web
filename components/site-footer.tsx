import Link from "next/link";
import { LouisLogo } from "@/components/louis-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-8 px-4 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-end lg:justify-between xl:px-12">
        <div>
          <LouisLogo size="footer" />
          <p className="mt-4 max-w-[320px] text-[14px] leading-5 tracking-[-0.01em] text-charcoal/70">
            The secure workspace where leading firms run matters, review
            documents, and produce work they can stand behind.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] tracking-[-0.01em] text-charcoal/80">
          <Link href="/platform" className="hover:text-charcoal">
            Platform
          </Link>
          <Link href="/solutions" className="hover:text-charcoal">
            Solutions
          </Link>
          <Link href="/security" className="hover:text-charcoal">
            Security
          </Link>
          <Link href="/company" className="hover:text-charcoal">
            Company
          </Link>
          <Link href="/request-a-demo" className="hover:text-charcoal">
            Request a Demo
          </Link>
        </nav>
      </div>
    </footer>
  );
}
