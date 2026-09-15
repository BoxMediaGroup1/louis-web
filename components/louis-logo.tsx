import Image from "next/image";
import Link from "next/link";

export function LouisLogo({
  className,
  imageClassName = "h-7 w-auto sm:h-8",
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Louis home"
      className={`inline-flex items-center ${className ?? ""}`}
    >
      <Image
        src="/louis-logo.png"
        alt="Louis"
        width={635}
        height={174}
        className={imageClassName}
        priority
      />
    </Link>
  );
}
