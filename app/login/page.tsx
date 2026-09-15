import Link from "next/link";
import { SimplePage } from "@/components/simple-page";

export const metadata = { title: "Login — Louis" };

export default function LoginPage() {
  return (
    <SimplePage title="Login">
      <p>
        Client login for the Louis workspace will live here. If you need access,
        request a demo and we will get you set up.
      </p>
      <p>
        <Link
          href="/request-a-demo"
          className="inline-flex h-11 items-center rounded-lg bg-charcoal px-5 text-[14px] font-medium text-white"
        >
          Request a Demo
        </Link>
      </p>
    </SimplePage>
  );
}
