import { Instrument_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { HeroHeadline } from "@/components/hero-headline";
import { ArrowRightIcon } from "@/components/product-demo/icons";
import { ProductInnovationSection } from "@/components/product-innovation-section";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <main className="flex-1 bg-ivory">
      <section>
        <div className="mx-auto w-full max-w-[1520px] px-4 pb-16 pt-16 sm:px-8 sm:pt-24 xl:px-12 lg:pt-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:items-end lg:gap-20">
            <HeroHeadline
              className={`${instrumentSerif.className} max-w-[840px] text-[60px] leading-[0.96] tracking-[-0.04em] text-charcoal sm:text-[80px] lg:text-[96px]`}
            />

            <div className="max-w-[400px] lg:pb-1">
              <p className="text-[16px] leading-6 tracking-[-0.01em] text-charcoal/80 sm:text-[17px]">
                Louis is the secure workspace where leading firms run matters,
                review documents, and produce work they can stand behind.
              </p>
              <div className="mt-7">
              <Link
                href="/request-a-demo"
                className="inline-flex h-11 items-center gap-2 rounded-[4px] bg-burgundy-deep px-5 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-burgundy"
              >
                Request a demo
                <ArrowRightIcon className="size-3.5" />
              </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 w-full sm:mt-20">
            <Image
              src="/hero-product.png"
              alt="Louis workspace showing the Project Meridian matter"
              width={8000}
              height={4500}
              sizes="(max-width: 1520px) 100vw, 1520px"
              preload
              unoptimized
              className="block h-auto w-full rounded-[6px]"
            />
          </div>
        </div>
      </section>
      <ProductInnovationSection />
    </main>
  );
}
