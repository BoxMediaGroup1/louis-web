"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/product-demo/icons";

type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageFit?: "object-cover" | "object-contain";
};

const products: Product[] = [
  {
    id: "ask-louis",
    title: "Ask Louis",
    description:
      "Work with Louis across documents, matters and firm knowledge through one secure legal AI workspace.",
    image: "/hero-product.png",
  },
  {
    id: "client-matters",
    title: "Client Matters",
    description:
      "Bring everything related to a client matter into one organised workspace for documents, tasks, research, collaboration and AI.",
    image: "/hero-product.png",
  },
  {
    id: "spaces",
    title: "Spaces",
    description:
      "Create governed workspaces for teams, clients and co-counsel, with permissions designed around sensitive legal work.",
    image: "/product-spaces.png",
    imageFit: "object-contain",
  },
  {
    id: "vaults",
    title: "Vaults",
    description:
      "Organise trusted documents and knowledge into reusable collections that Louis can securely work across.",
    image: "/hero-product.png",
  },
  {
    id: "agents",
    title: "Agents",
    description:
      "Run complex multi-step legal workflows with specialised AI agents coordinating tasks and producing structured outputs.",
    image: "/hero-product.png",
  },
  {
    id: "legal-research",
    title: "Legal Research",
    description:
      "Research legal questions using AI-assisted search, source-backed answers and citations within the Louis workspace.",
    image: "/hero-product.png",
  },
];

const transition =
  "duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0";

export function ProductInnovationSection() {
  const [activeId, setActiveId] = useState(products[0].id);
  const [previousId, setPreviousId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeProduct =
    products.find((product) => product.id === activeId) ?? products[0];
  const previousProduct = previousId
    ? products.find((product) => product.id === previousId) ?? null
    : null;

  useEffect(() => {
    if (!previousId) {
      return;
    }

    const frame = window.requestAnimationFrame(() => setIsTransitioning(true));
    const timer = window.setTimeout(() => {
      setPreviousId(null);
      setIsTransitioning(false);
    }, 550);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [previousId]);

  function selectProduct(id: string) {
    if (id === activeId) {
      return;
    }

    setIsTransitioning(false);
    setPreviousId(activeId);
    setActiveId(id);
  }

  return (
    <section
      aria-labelledby="product-innovation-heading"
      className="bg-ivory py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1520px] px-4 sm:px-8 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-20 xl:gap-28">
          <div>
            <h2
              id="product-innovation-heading"
              className="max-w-[420px] text-[38px] font-medium leading-[1.03] tracking-[-0.04em] text-charcoal sm:text-[48px]"
            >
              Product Innovation for
              <br />
              Modern Legal Teams
            </h2>

            <div className="mt-12 border-t border-charcoal/15">
              {products.map((product) => {
                const isActive = product.id === activeId;

                return (
                  <div
                    key={product.id}
                    className="border-b border-charcoal/15"
                  >
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={`product-detail-${product.id}`}
                      onClick={() => selectProduct(product.id)}
                      className={`flex w-full items-center justify-between py-5 text-left text-[17px] tracking-[-0.02em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy sm:text-[18px] ${
                        isActive
                          ? "font-medium text-charcoal"
                          : "text-ink transition-colors hover:text-charcoal"
                      }`}
                    >
                      {product.title}
                      <span
                        aria-hidden="true"
                        className={`ml-5 size-1.5 rounded-full bg-burgundy transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </button>

                    <div
                      id={`product-detail-${product.id}`}
                      className={`grid overflow-hidden transition-[grid-template-rows] ${transition} ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div
                          aria-hidden={!isActive}
                          className={`max-w-[410px] pb-7 transition-[opacity,transform] ${transition} ${
                            isActive
                              ? "translate-y-0 opacity-100"
                              : "translate-y-2 opacity-0 motion-reduce:translate-y-0"
                          }`}
                        >
                          <p className="text-[14px] leading-5 tracking-[-0.01em] text-charcoal/75 sm:text-[15px]">
                            {product.description}
                          </p>
                          <Link
                            href={`/platform#${product.id}`}
                            tabIndex={isActive ? 0 : -1}
                            className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-charcoal transition-colors duration-200 hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
                          >
                            Learn more
                            <ArrowRightIcon className="size-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ProductVisual
            activeProduct={activeProduct}
            previousProduct={previousProduct}
            isTransitioning={isTransitioning}
          />
        </div>
      </div>
    </section>
  );
}

function ProductVisual({
  activeProduct,
  previousProduct,
  isTransitioning,
}: {
  activeProduct: Product;
  previousProduct: Product | null;
  isTransitioning: boolean;
}) {
  return (
    <div className="w-full max-w-[750px] lg:pt-4">
      <div className="relative aspect-[750/563] overflow-hidden">
        {previousProduct ? (
          <ProductImage
            product={previousProduct}
            isLeaving
            isTransitioning={isTransitioning}
          />
        ) : null}
        <ProductImage
          product={activeProduct}
          isEntering={Boolean(previousProduct)}
          isTransitioning={isTransitioning}
        />
      </div>
      <p className="mt-4 text-[12px] tracking-[-0.01em] text-ink">
        Louis workspace · {activeProduct.title}
      </p>
    </div>
  );
}

function ProductImage({
  product,
  isLeaving = false,
  isEntering = false,
  isTransitioning = false,
}: {
  product: Product;
  isLeaving?: boolean;
  isEntering?: boolean;
  isTransitioning?: boolean;
}) {
  const visualState = isLeaving
    ? isTransitioning
      ? "scale-[0.985] opacity-0 motion-reduce:scale-100"
      : "scale-100 opacity-100"
    : isEntering && !isTransitioning
      ? "translate-y-2 opacity-0 motion-reduce:translate-y-0"
      : "translate-y-0 opacity-100";

  return (
    <div
      className={`absolute inset-0 overflow-hidden rounded-[6px] transition-[opacity,transform] ${transition} ${visualState}`}
    >
      <Image
        src={product.image}
        alt={`${product.title} in the Louis workspace`}
        width={8000}
        height={4500}
        sizes="(max-width: 1023px) calc(100vw - 32px), (max-width: 1279px) 52vw, 760px"
        unoptimized
        className={`h-full w-full ${product.imageFit ?? "object-cover"}`}
      />
    </div>
  );
}
