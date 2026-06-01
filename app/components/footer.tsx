import { Logo } from "@/app/components/logo";
import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
  { href: "/press", label: "Press" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-tertiary-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row md:gap-4 md:px-10 lg:px-16">
        <Logo variant="dark" size="md" />

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-subtle text-[10px] font-medium tracking-[0.14em] uppercase transition-colors hover:text-neutral-700"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-subtle text-center text-[10px] tracking-[0.08em] uppercase md:text-right">
          © {year} Lumora Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
