import { SimplePage } from "@/components/simple-page";

export const metadata = { title: "Solutions — Louis" };

export default function SolutionsPage() {
  return (
    <SimplePage title="Solutions">
      <p>
        Louis is built for legal teams that need a secure workspace for matters,
        documents, research and AI — without giving up control of firm
        knowledge.
      </p>
      <h2 id="law-firms" className="scroll-mt-24 pt-8 text-[22px] font-medium tracking-[-0.03em] text-charcoal">
        Law firms
      </h2>
      <p>
        Run client matters in one place, with governed access for partners,
        associates and clients.
      </p>
      <h2 id="in-house" className="scroll-mt-24 pt-8 text-[22px] font-medium tracking-[-0.03em] text-charcoal">
        In-house teams
      </h2>
      <p>
        Keep contracts, advice and institutional knowledge in a workspace your
        team can actually work in.
      </p>
      <h2 id="collaboration" className="scroll-mt-24 pt-8 text-[22px] font-medium tracking-[-0.03em] text-charcoal">
        Co-counsel collaboration
      </h2>
      <p>
        Bring co-counsel into Spaces with permissions designed around sensitive
        legal work.
      </p>
    </SimplePage>
  );
}
