import type { ReactNode } from "react";

export function SimplePage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1 bg-ivory">
      <section className="mx-auto w-full max-w-[800px] px-4 py-24 sm:px-8">
        <h1 className="text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-[52px]">
          {title}
        </h1>
        <div className="mt-6 space-y-4 text-[16px] leading-6 text-charcoal/80">
          {children}
        </div>
      </section>
    </main>
  );
}
