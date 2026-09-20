"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { LouisLogo } from "@/components/louis-logo";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
} from "@/components/product-demo/icons";

type NavChild = { href: string; label: string };
type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { href: "/platform#ask-louis", label: "Ask Louis" },
      { href: "/platform#client-matters", label: "Client Matters" },
      { href: "/platform#spaces", label: "Spaces" },
      { href: "/platform#vaults", label: "Vaults" },
      { href: "/platform#agents", label: "Agents" },
      { href: "/platform#legal-research", label: "Legal Research" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { href: "/solutions#law-firms", label: "Law firms" },
      { href: "/solutions#in-house", label: "In-house teams" },
      { href: "/solutions#collaboration", label: "Co-counsel collaboration" },
    ],
  },
  { label: "Customers", href: "/customers" },
  { label: "Security", href: "/security" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { href: "/platform", label: "Platform overview" },
      { href: "/resources#guides", label: "Guides" },
      { href: "/request-a-demo", label: "Request a demo" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { href: "/company", label: "About Louis" },
      { href: "/security", label: "Security" },
      { href: "/request-a-demo", label: "Contact" },
    ],
  },
];

const loginItems: NavChild[] = [
  { href: "/login", label: "Client login" },
  { href: "/request-a-demo", label: "Request access" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setOpenMenu(null);
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory">
      <div className="mx-auto flex h-16 w-full max-w-[1520px] items-center gap-6 px-4 sm:h-[72px] sm:px-8 xl:gap-10 xl:px-12">
        <LouisLogo />

        <nav className="hidden min-w-0 flex-1 items-center gap-1 lg:flex xl:gap-2">
          {navItems.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <DesktopNavItem
            item={{ label: "Login", href: "/login", children: loginItems }}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            variant="login"
          />
          <p className="inline-flex h-9 items-center rounded-lg bg-charcoal px-3.5 text-[13px] font-medium text-white">
            Launching October 2026
          </p>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex size-10 items-center justify-center rounded-lg text-charcoal lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          {isOpen ? (
            <CloseIcon className="size-5" />
          ) : (
            <MenuIcon className="size-5" />
          )}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-charcoal/10 px-4 py-3 sm:px-8 lg:hidden"
        >
          {navItems.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onNavigate={() => setIsOpen(false)}
            />
          ))}
          <div className="mt-4 flex flex-col gap-2 pb-4">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-charcoal/20 text-[14px] font-medium text-charcoal"
            >
              Login
            </Link>
            <p className="inline-flex h-11 items-center justify-center rounded-lg bg-charcoal text-[14px] font-medium text-white">
              Launching October 2026
            </p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function DesktopNavItem({
  item,
  openMenu,
  setOpenMenu,
  variant = "link",
}: {
  item: NavItem;
  openMenu: string | null;
  setOpenMenu: (value: string | null) => void;
  variant?: "link" | "login";
}) {
  const menuId = useId();
  const isOpen = openMenu === item.label;
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren && item.href) {
    return (
      <Link
        href={item.href}
        className="rounded-md px-2.5 py-2 text-[13px] tracking-[-0.01em] text-charcoal transition-colors hover:text-charcoal/70 xl:px-3 xl:text-[14px]"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(item.label)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      {variant === "login" ? (
        <button
          type="button"
          className="inline-flex h-9 items-center gap-1 rounded-lg border border-charcoal/20 bg-ivory px-3 text-[13px] font-medium text-charcoal transition-colors hover:border-charcoal/40"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setOpenMenu(isOpen ? null : item.label)}
        >
          {item.label}
          <ChevronDownIcon className="size-3.5" />
        </button>
      ) : (
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] tracking-[-0.01em] text-charcoal transition-colors hover:text-charcoal/70 xl:px-3 xl:text-[14px]"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setOpenMenu(isOpen ? null : item.label)}
        >
          {item.label}
          <ChevronDownIcon className="size-3.5 opacity-70" />
        </button>
      )}

      {isOpen && item.children ? (
        <div
          id={menuId}
          className={`absolute top-full z-50 min-w-[220px] pt-2 ${
            variant === "login" ? "right-0" : "left-0"
          }`}
        >
          <div className="rounded-xl border border-charcoal/10 bg-ivory py-2 shadow-[0_12px_40px_rgba(28,25,23,0.08)]">
            {item.children.map((child) => (
              <Link
                key={child.href + child.label}
                href={child.href}
                className="block px-4 py-2 text-[13px] text-charcoal hover:bg-charcoal/5"
                onClick={() => setOpenMenu(null)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length && item.href) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block py-3 text-[16px] tracking-[-0.01em] text-charcoal"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-charcoal/10">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-left text-[16px] text-charcoal"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDownIcon
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <div className="pb-3 pl-3">
          {item.href ? (
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block py-2 text-[15px] text-charcoal/80"
            >
              Overview
            </Link>
          ) : null}
          {item.children?.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              onClick={onNavigate}
              className="block py-2 text-[15px] text-charcoal/80"
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
