import { Instrument_Serif } from "next/font/google";
import Link from "next/link";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-8 px-4 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-end lg:justify-between xl:px-12">
        <div>
          <Link
            href="/"
            className={`${instrumentSerif.className} text-[28px] leading-none tracking-[-0.04em] text-charcoal`}
          >
            Louis
          </Link>
          <p className="mt-4 max-w-[320px] text-[14px] leading-5 tracking-[-0.01em] text-charcoal/70">
            The secure workspace where leading firms run matters, review
            documents, and produce work they can stand behind.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] tracking-[-0.01em] text-charcoal/80">
          <Link href="/platform" className="hover:text-charcoal">
            Platform
          </Link>
          <Link
            href="/#product-innovation-heading"
            className="hover:text-charcoal"
          >
            Product
          </Link>
          <Link href="/request-a-demo" className="hover:text-charcoal">
            Request a demo
          </Link>
        </nav>
      </div>
    </footer>
  );
}
