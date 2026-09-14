const products = [
  {
    id: "ask-louis",
    title: "Ask Louis",
    description:
      "Work with Louis across documents, matters and firm knowledge through one secure legal AI workspace.",
  },
  {
    id: "client-matters",
    title: "Client Matters",
    description:
      "Bring everything related to a client matter into one organised workspace for documents, tasks, research, collaboration and AI.",
  },
  {
    id: "spaces",
    title: "Spaces",
    description:
      "Create governed workspaces for teams, clients and co-counsel, with permissions designed around sensitive legal work.",
  },
  {
    id: "vaults",
    title: "Vaults",
    description:
      "Organise trusted documents and knowledge into reusable collections that Louis can securely work across.",
  },
  {
    id: "agents",
    title: "Agents",
    description:
      "Run complex multi-step legal workflows with specialised AI agents coordinating tasks and producing structured outputs.",
  },
  {
    id: "legal-research",
    title: "Legal Research",
    description:
      "Research legal questions using AI-assisted search, source-backed answers and citations within the Louis workspace.",
  },
];

export const metadata = {
  title: "Platform — Louis",
};

export default function PlatformPage() {
  return (
    <main className="flex-1 bg-ivory">
      <section className="mx-auto w-full max-w-[800px] px-4 py-24 sm:px-8">
        <h1 className="text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-[52px]">
          Platform
        </h1>
        <p className="mt-6 max-w-[560px] text-[16px] leading-6 text-charcoal/80">
          Explore the Louis workspace products used by modern legal teams.
        </p>
        <div className="mt-16 space-y-12">
          {products.map((product) => (
            <article key={product.id} id={product.id} className="scroll-mt-24">
              <h2 className="text-[24px] font-medium tracking-[-0.03em] text-charcoal">
                {product.title}
              </h2>
              <p className="mt-3 text-[15px] leading-6 text-charcoal/75">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
