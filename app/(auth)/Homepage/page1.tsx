import Image from "next/image";
import { BookOpen, Camera, CheckCircle2, LayoutDashboard, Sparkles, Star, ShieldCheck, Clock, Truck } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Logo } from "@/app/components/logo";

const stats = [
  { label: "Happy customers", value: "100,000+" },
  { label: "Average rating", value: "4.9/5.0" },
  { label: "Print quality", value: "Ultra HD" },
  { label: "Fast shipping", value: "Global" },
];

const features = [
  {
    title: "Premium Print Quality",
    description:
      "Utilizing state-of-the-art print technology on archival paper to ensure your photos last generations.",
    icon: BookOpen,
  },
  {
    title: "Customizable Templates",
    description:
      "Choose from hundreds of designer layouts tailored for travel, weddings, and everyday moments.",
    icon: LayoutDashboard,
  },
  {
    title: "AI Auto Layout",
    description:
      "Our smart algorithm arranges your photos chronologically and aesthetically in seconds.",
    icon: Sparkles,
  },
];

const collections = [
  {
    title: "Amalfi Coast",
    subtitle: "European Summer",
    image: "https://picsum.photos/id/1015/1200/900",
  },
  {
    title: "Kyoto Temples",
    subtitle: "Cultural Journey",
    image: "https://picsum.photos/id/1016/1200/900",
  },
  {
    title: "Serengeti Plains",
    subtitle: "Wild Adventures",
    image: "https://picsum.photos/id/1018/1200/900",
  },
  {
    title: "Icelandic Fjords",
    subtitle: "Nature’s Edge",
    image: "https://picsum.photos/id/1020/1200/900",
  },
  {
    title: "City of Light",
    subtitle: "Urban Romance",
    image: "https://picsum.photos/id/1024/1200/900",
  },
  {
    title: "Ubud Retreats",
    subtitle: "Island Bliss",
    image: "https://picsum.photos/id/1027/1200/900",
  },
];

const testimonials = [
  {
    quote:
      "The print quality surpassed my expectations. It feels like a high-end art book you’d find in a museum gift shop.",
    author: "Sarah Jenkins, New York",
  },
  {
    quote:
      "The AI layout tool saved me hours. I finished my three-week Japan travel book in under 20 minutes.",
    author: "Marcus Thorne, London",
  },
  {
    quote:
      "Beautiful paper options. I chose the eggshell finish and it makes the landscape photos look absolutely stunning.",
    author: "Elena Rodriguez, Madrid",
  },
];

const plans = [
  {
    name: "Essential",
    price: "$39",
    details: ["Softcover Finish", "24 Pages Included", "Standard Glossy Paper", "AI Layout Tool"],
    action: "Choose Basic",
    accent: false,
  },
  {
    name: "Heritage",
    price: "$69",
    details: ["Hardcover Linen", "48 Pages Included", "Premium Matte Paper", "Priority Processing"],
    action: "Choose Premium",
    accent: true,
  },
  {
    name: "Artifact",
    price: "$129",
    details: ["Leather Bound", "100 Pages Included", "Hand Sewn Layflat", "Presentation Box"],
    action: "Choose Luxury",
    accent: false,
  },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Most orders ship within 3-5 business days, with international delivery arriving in under two weeks.",
  },
  {
    question: "What resolution do my photos need to be?",
    answer: "We recommend 300 DPI for the best print results, but our AI can optimize most smartphone photos automatically.",
  },
  {
    question: "Can I order multiple copies with a discount?",
    answer: "Yes — volume orders qualify for discounted pricing and free shipping on large print runs.",
  },
];

export default function FirstPage() {
  return (
    <main className="bg-tertiary-50 text-secondary-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo size="lg" />

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#products" className="text-sm font-medium text-secondary-700 transition hover:text-secondary-900">
            Products
          </a>
          <a href="#collections" className="text-sm font-medium text-secondary-700 transition hover:text-secondary-900">
            Templates
          </a>
          <a href="#reviews" className="text-sm font-medium text-secondary-700 transition hover:text-secondary-900">
            Reviews
          </a>
          <a href="#pricing" className="text-sm font-medium text-secondary-700 transition hover:text-secondary-900">
            Pricing
          </a>
          <a href="#faq" className="text-sm font-medium text-secondary-700 transition hover:text-secondary-900">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outlined" size="sm">Login</Button>
          <Button>Start Designing</Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-signup.jpg" alt="Luxurious photobook on a table" fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-180 max-w-7xl items-center px-6 py-24">
          <div className="w-full max-w-2xl text-white">
            <span className="inline-flex rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-100">
              New collection · Museum-grade photobooks
            </span>
            <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Turn your memories into beautiful photobooks
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Create premium personalized photo books that preserve your life’s best adventures with museum-grade quality and timeless design.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button className="rounded-full px-8 py-3">Start Designing</Button>
              <Button variant="outlined" className="rounded-full px-8 py-3 text-inherit">Watch Demo</Button>
            </div>

            <div className="mt-12 grid gap-4 rounded-3xl bg-white/10 p-6 text-sm text-white shadow-2xl shadow-slate-950/20 backdrop-blur sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
                <div className="inline-flex rounded-2xl bg-primary-50 p-3 text-primary-700">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] bg-white px-8 py-12 shadow-sm sm:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-600">Creating art is simple</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-secondary-900 sm:text-4xl">
              Save time with a streamlined design process.
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
              Upload your photos, choose a style, and let our system create a polished photo book in minutes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Upload Photos",
                description: "Sync from your phone, Dropbox, or social media accounts effortlessly.",
                icon: Camera,
              },
              {
                title: "Customize Design",
                description: "Fine-tune layouts, add captions, and choose your premium cover finish.",
                icon: LayoutDashboard,
              },
              {
                title: "Order & Enjoy",
                description: "We print and ship your masterpiece directly to your door in days.",
                icon: Truck,
              },
            ].map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="rounded-3xl border border-neutral-200 bg-tertiary-50 p-6 text-center">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary-100 text-secondary-700">
                    <StepIcon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-600">Curated Collections</p>
          <h2 className="mt-4 text-3xl font-semibold text-secondary-900 sm:text-4xl">Bring your travel stories to life.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent" />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-neutral-500">{item.subtitle}</p>
                <h3 className="text-xl font-semibold text-secondary-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-600">Loved by Travelers</p>
          <h2 className="mt-4 text-3xl font-semibold text-secondary-900 sm:text-4xl">Highly rated by our community.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-primary-600">
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
              </div>
              <p className="mt-6 text-sm leading-7 text-neutral-600">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-secondary-900">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 rounded-[2rem] bg-white p-8 shadow-sm md:grid-cols-4">
          {[
            { title: "Museum Quality", description: "Archival inks that never fade over time.", icon: ShieldCheck },
            { title: "Premium Paper", description: "Sustainable 200gsm thick-cut paper.", icon: BookOpen },
            { title: "Fast Delivery", description: "Express global shipping in 3-5 days.", icon: Clock },
            { title: "Guaranteed", description: "100% satisfaction or a full reprint.", icon: CheckCircle2 },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-neutral-200 p-6 text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-50 text-primary-700">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-secondary-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-600">Perfect for every story</p>
          <h2 className="mt-4 text-3xl font-semibold text-secondary-900 sm:text-4xl">Choose the photobook that fits your journey.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 shadow-sm ${
                plan.accent ? "border-primary-200 bg-secondary-900 text-white" : "border-neutral-200 bg-white"
              }`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{plan.name}</p>
              <p className={`mt-6 text-5xl font-semibold ${plan.accent ? "text-white" : "text-secondary-900"}`}>
                {plan.price}
                <span className="text-base font-medium text-neutral-500">/book</span>
              </p>
              <ul className={`mt-8 space-y-3 text-sm leading-7 ${plan.accent ? "text-white/80" : "text-neutral-600"}`}>
                {plan.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-primary-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-10 w-full rounded-full px-6 py-3 ${
                  plan.accent
                    ? "bg-white text-secondary-900 hover:bg-slate-100"
                    : "border border-neutral-200 bg-transparent text-secondary-900 hover:bg-neutral-100"
                }`}
              >
                {plan.action}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-600">Questions?</p>
          <h2 className="mt-4 text-3xl font-semibold text-secondary-900 sm:text-4xl">Everything you need to know.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <button className="flex w-full items-center justify-between text-left text-sm font-semibold text-secondary-900">
                {faq.question}
              </button>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] bg-secondary-950 px-8 py-14 text-center text-white shadow-2xl shadow-slate-950/20 sm:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Preserve every memory</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Join our community for design tips and 15% off your first photobook.
          </h2>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full rounded-full border border-be-label bg-white/10 px-5 text-sm text-black placeholder:text-black focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300/30"
            />
            <Button className="h-12 rounded-full px-8 py-3">Subscribe</Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-6 max-w-xs text-sm leading-7 text-neutral-600">
              Preserving the world’s most beautiful adventures through premium, museum-grade photobooks.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Company</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-secondary-900">About Us</a></li>
         
              <li><a href="#" className="hover:text-secondary-900">Press</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Support</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-secondary-900">Help Center</a></li>
              <li><a href="#" className="hover:text-secondary-900">Shipping</a></li>
              <li><a href="#" className="hover:text-secondary-900">Returns</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Legal</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-secondary-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-6 text-center text-sm text-neutral-500">
          © 2026 Lumora Collective. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
