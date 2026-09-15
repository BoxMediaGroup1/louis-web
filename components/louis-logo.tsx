import Image from "next/image";
import Link from "next/link";

const sizes = {
  header: { height: 22, width: 80 },
  footer: { height: 24, width: 88 },
} as const;

export function LouisLogo({
  className,
  size = "header",
}: {
  className?: string;
  size?: keyof typeof sizes;
}) {
  const { width, height } = sizes[size];

  return (
    <Link
      href="/"
      aria-label="Louis home"
      className={`inline-flex shrink-0 items-center ${className ?? ""}`}
    >
      <Image
        src="/louis-logo.png"
        alt="Louis"
        width={width}
        height={height}
        className="object-contain object-left"
        style={{ width, height }}
        priority
      />
    </Link>
  );
}
