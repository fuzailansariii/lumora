import Image from "next/image";
// import { BookOpen, Clock, LayoutDashboard, Sparkles, Star, Truck } from "lucide-react";
import { BookOpen, Sparkles, Star, Truck } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Logo } from "@/app/components/logo";

const benefits = [
  {
    title: "AI-Curation",
    description:
      "Our smart layout engine automatically selects your best shots and arranges them chronologically for a seamless narrative flow.",
    icon: Sparkles,
  },
  {
    title: "Bespoke Covers",
    description:
      "Choose from Italian linen, premium leather, or silk-wrapped hardcovers with custom gold foil stamping.",
    icon: BookOpen,
  },
  {
    title: "Archival Grade",
    description:
      "Printed using 12-color archival pigment inks to ensure your colors remain vibrant for generations to come.",
    icon: Star,
  },
  {
    title: "Swift Creation",
    description:
      "Create a professional-grade 100-page book in under 10 minutes using our intuitive cloud platform.",
    icon: Truck,
  },
];

const curations = [
  {
    title: "The Sahara Expedition",
    subtitle: "124 Pages • Premium Linen",
    image: "https://picsum.photos/id/1011/1200/900",
  },
  {
    title: "Tokyo Nights",
    subtitle: "80 Pages • Silk Wrap",
    image: "https://picsum.photos/id/1025/1200/900",
  },
  {
    title: "Alpine Solitude",
    subtitle: "150 Pages • Genuine Leather",
    image: "https://picsum.photos/id/1030/1200/900",
  },
  {
    title: "The Coastal Series",
    subtitle: "60 Pages • Soft Cover",
    image: "https://picsum.photos/id/1040/1200/900",
  },
];

export default function SecondPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo size="md" />
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#gallery" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
              Gallery
            </a>
            <a href="#features" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
              Features
            </a>
            <a href="#pricing" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
              FAQ
            </a>
          </nav>
          <Button className="rounded-full bg-slate-950 px-6 py-2 text-white hover:bg-slate-800">
            Create Book
          </Button>
        </div>
      </header>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Timeless memories
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Your travel stories, crafted as art.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Transform your favorite digital photographs into a physical masterpiece. Premium materials, minimalist design, and elegant layouts tailored for your journey.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
              <Image
                src="https://picsum.photos/id/1018/1200/900"
                alt="Open photobook on table"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
              <Image
                src="https://picsum.photos/id/1021/1200/900"
                alt="Open photobook in living room"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg sm:col-span-2">
              <Image
                src="https://picsum.photos/id/1032/1200/900"
                alt="Lifestyle coffee table book"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Paper quality
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                200gsm Lustre finish. Acid-free paper. Museum-grade printing designed to make every page feel like a keepsake.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
              <Image
                src="https://picsum.photos/id/1045/1200/900"
                alt="Stack of photobooks on shelf"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Elevated Craftsmanship</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Every detail is considered, from the weight of the paper to the depth of the emboss.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Recent Curations</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Inspiration from our community of global storytellers.
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {curations.map((item, ) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 p-6">
                <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">Investment in Memory</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Heirloom quality books, priced for your preference.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid gap-6 lg:grid-cols-2 xl:max-w-5xl">
          <article className="rounded-[2rem] border border-white/10 bg-slate-900 p-10 shadow-[0_35px_120px_-35px_rgba(15,23,42,0.8)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">The Essential</p>
            <p className="mt-6 text-5xl font-semibold text-white">$89</p>
            <p className="mt-2 text-sm text-slate-400">per book</p>
            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              <li>50 Pages</li>
              <li>Premium Softcover</li>
              <li>Lustre Paper</li>
              <li>Digital Copy Included</li>
            </ul>
            <Button className="mt-10 w-full rounded-full border border-white/10 bg-transparent px-6 py-3 text-white hover:bg-white/10">
              Choose Essential
            </Button>
          </article>

          <article className="rounded-[2rem] bg-white p-10 text-slate-950 shadow-[0_35px_120px_-35px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">The Heirloom</p>
                <p className="mt-6 text-5xl font-semibold text-slate-950">$199</p>
                <p className="mt-2 text-sm text-slate-500">per book</p>
              </div>
              <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                Most Popular
              </span>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-slate-600">
              <li>150 Pages</li>
              <li>Italian Linen Hardcover</li>
              <li>Gold Foil Embossing</li>
              <li>Artisan Presentation Box</li>
            </ul>
            <Button className="mt-10 w-full rounded-full bg-slate-950 px-6 py-3 text-white hover:bg-slate-800">
              Create Heirloom
            </Button>
          </article>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo size="sm" />
            <p className="mt-4 text-sm text-slate-500">© 2026 Lumora Collective. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-950">Privacy Policy</a>
            <a href="#" className="hover:text-slate-950">Terms of Service</a>
            <a href="#" className="hover:text-slate-950">Shipping</a>
            <a href="#" className="hover:text-slate-950">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
