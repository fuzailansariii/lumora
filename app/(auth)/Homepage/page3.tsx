import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Logo } from "@/app/components/logo";

export default function ThirdPage() {
  return (
    <main className="border-t border-neutral-200 bg-tertiary-100">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Curating memories
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Your travel stories, artfully bound.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Experience the tactile joy of premium photobooks. Minimalist design meets heirloom-quality materials for a legacy that breathes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button className="rounded-full bg-slate-950 px-8 py-3 text-white shadow-lg hover:bg-slate-800">
                Start Curating
              </Button>
              <Button variant="outlined" className="rounded-full px-8 py-3 text-slate-950">
                <Play className="size-4" />
                Watch the Process
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.18)]">
            <Image
              src="https://picsum.photos/id/1039/1200/900"
              alt="Open photobook on wooden table"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
