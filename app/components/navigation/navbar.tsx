"use client";

import { Globe, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Logo } from "@/app/components/logo";
import { cn } from "@/lib/utils";

export interface NavbarLink {
  label: string;
  href?: string;
}

export interface NavbarSection {
  title: string;
  items: NavbarLink[];
}

export interface NavbarProps {
  links?: NavbarLink[];
  menuSections?: NavbarSection[];
  ctaLabel?: string;
  ctaHref?: string;
  logoHref?: string;
  className?: string;
}

const defaultLinks: NavbarLink[] = [
  { label: "Photo books", href: "#" },
  { label: "Gifts", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "How it works", href: "#" },
];

const defaultMenuSections: NavbarSection[] = [
  {
    title: "Prints",
    items: [
      { label: "Photo prints", href: "#" },
      { label: "Christmas cards", href: "#" },
      { label: "Invitation cards", href: "#" },
      { label: "Thank you cards", href: "#" },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "Support", href: "#" },
      { label: "Delivery & payment", href: "#" },
      { label: "Discounts", href: "#" },
    ],
  },
  {
    title: "About Us",
    items: [
      { label: "Stories", href: "#" },
      { label: "History & vision", href: "#" },
      { label: "Work with us", href: "#" },
      { label: "Collaborate with us", href: "#" },
      { label: "Sustainability", href: "#" },
    ],
  },
];

export default function Navbar({
  links = defaultLinks,
  menuSections = defaultMenuSections,
  ctaLabel = "Get the app",
  ctaHref = "#",
  logoHref = "/",
  className,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={cn("sticky top-0 z-50", className)}>
      <nav className="border-t border-neutral-200 bg-tertiary-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <div className="shrink-0">
            <Logo size="lg" href={logoHref} />
          </div>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href ?? "#"}
                className="text-xs font-medium text-neutral-900 transition hover:text-primary-600 sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-1.5 transition hover:text-primary-600 sm:p-2" aria-label="Choose language">
              <Globe className="size-4 text-neutral-900 sm:size-5" />
            </button>

            <button className="p-1.5 transition hover:text-primary-600 sm:p-2" aria-label="Open account">
              <User className="size-4 text-neutral-900 sm:size-5" />
            </button>

            <Button
              className="hidden rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-semibold text-neutral-900 transition hover:bg-yellow-500 sm:px-6 sm:py-2 sm:text-sm md:inline-flex"
              onClick={() => window.location.assign(ctaHref)}
            >
              {ctaLabel}
            </Button>

            <button
              className="p-1.5 transition hover:text-primary-600 sm:p-2"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="size-5 text-neutral-900 sm:size-6" />
              ) : (
                <Menu className="size-5 text-neutral-900 sm:size-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-b border-neutral-200 bg-neutral-100">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {menuSections.map((section) => (
                <div key={section.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    {section.title}
                  </p>
                  <ul className="mt-4 space-y-2 sm:space-y-3">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href ?? "#"}
                          className="text-sm text-neutral-900 transition hover:text-primary-600"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
