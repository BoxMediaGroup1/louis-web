import Link from "next/link";
import { SimplePage } from "@/components/simple-page";

export const metadata = { title: "Resources — Louis" };

export default function ResourcesPage() {
  return (
    <SimplePage title="Resources">
      <p id="guides" className="scroll-mt-24">
        Learn how teams use Louis across documents, matters and firm knowledge.
      </p>
      <p>
        <Link href="/platform" className="font-medium text-charcoal underline decoration-charcoal/20 underline-offset-4">
          Platform overview
        </Link>
      </p>
    </SimplePage>
  );
}
