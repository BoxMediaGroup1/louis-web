import Link from "next/link";

export const metadata = {
  title: "Request a demo — Louis",
};

export default function RequestADemoPage() {
  return (
    <main className="flex-1 bg-ivory">
      <section className="mx-auto w-full max-w-[720px] px-4 py-24 sm:px-8">
        <p className="text-[13px] font-medium tracking-[-0.01em] text-burgundy">
          Louis
        </p>
        <h1 className="mt-4 text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-[52px]">
          Request a demo
        </h1>
        <p className="mt-6 max-w-[520px] text-[16px] leading-6 text-charcoal/80">
          See how Louis helps firms run matters, review documents, and produce
          work they can stand behind.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-11 items-center rounded-[4px] bg-burgundy-deep px-5 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-burgundy"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
