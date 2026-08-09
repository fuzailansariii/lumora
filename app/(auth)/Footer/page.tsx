"use client";

import { Logo } from "@/app/components/logo";
import { SocialLinks } from "@/app/components/footer/SocialLinks";
import { Newsletter } from "@/app/components/footer/Newsletter";
import { FooterColumn } from "@/app/components/footer/FooterColumn";
import { PaymentMethods } from "@/app/components/footer/PaymentMethods";
import { AppStores } from "@/app/components/footer/AppStores";

const productLinks = [
  { label: "Photo books", href: "#" },
  { label: "Photo prints", href: "#" },
];

const contactLinks = [
  { label: "FAQ", href: "#" },
  { label: "Support", href: "#" },
  { label: "Work with us", href: "#" },
];

const informationLinks = [
  { label: "Delivery & Payment", href: "#" },
  { label: "Discounts", href: "#" },
];

const appsLinks = [
  { label: "Lumora for Web", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-tertiary-100">
      {/* Main Footer */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row md:gap-4 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <Logo variant="dark" size="md" />
              <p className="mt-2 text-sm text-neutral-600">
                Photo books for every moment
              </p>
            </div>

            {/* Newsletter */}
            <Newsletter />

            {/* Social Icons */}
            <SocialLinks />
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Turning your memories into stories that last
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FooterColumn title="Products" links={productLinks} />
              <FooterColumn title="Contact" links={contactLinks} />
              <FooterColumn title="Information" links={informationLinks} />
              <FooterColumn title="Apps" links={appsLinks} />
            </div>

            {/* Certificates */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex gap-4">
                <div className="rounded bg-red-600 px-3 py-2 text-xs font-bold text-white">
                  Great Place To Work
                </div>
              </div>

              <AppStores />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-300">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Payments */}
            <PaymentMethods />

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-600">
              <a href="#">Terms of use</a>
              <a href="#">Terms of purchase</a>
              <a href="#">Cookie policy</a>
            </div>

            {/* Copyright */}
           <p className="text-subtle text-center text-[10px] tracking-[0.08em] uppercase md:text-right">
          © {year} Lumora Collective. All rights reserved.
        </p>
          </div>
        </div>
      </div>
    </footer>
  );
}