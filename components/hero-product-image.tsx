import { heroBlurDataUrl } from "@/lib/hero-blur";

const srcSet = "/hero-product-1280.webp 1280w, /hero-product.webp 2560w";
const sizes = "(max-width: 1520px) calc(100vw - 32px), 1520px";

export const heroImagePreload = {
  rel: "preload" as const,
  as: "image" as const,
  href: "/hero-product-1280.webp",
  type: "image/webp",
  imageSrcSet: srcSet,
  imageSizes: sizes,
  fetchPriority: "high" as const,
};

export function HeroProductImage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={heroImagePreload.href}
        type={heroImagePreload.type}
        imageSrcSet={heroImagePreload.imageSrcSet}
        imageSizes={heroImagePreload.imageSizes}
        fetchPriority={heroImagePreload.fetchPriority}
      />
      <div
        className="overflow-hidden rounded-[6px]"
        style={{
          backgroundImage: `url(${heroBlurDataUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="/hero-product-1280.webp"
          srcSet={srcSet}
          sizes={sizes}
          width={2560}
          height={1440}
          alt="Louis workspace showing the Project Meridian matter"
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
    </>
  );
}
