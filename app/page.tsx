import { Logo } from "@/app/components/logo";
import { Button } from "@/app/components/ui/button";
import { Pencil } from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-12 px-6 py-16">
      <section className="flex flex-col gap-4">
        <Logo variant="dark" size="xl" href={null} />
        <h1 className="font-heading text-4xl">Typography</h1>
        <p className="text-body text-base">
          Body text uses Inter with the neutral charcoal tone from your palette.
        </p>
        <span className="text-label text-xs font-medium tracking-wide uppercase">Label</span>
        <p className="text-subtle text-sm">Muted supporting copy.</p>
        <p className="text-gold text-sm">Accent text in primary gold.</p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="inverted">Inverted</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary" size="icon" aria-label="Edit">
            <Pencil className="size-4" strokeWidth={1.75} />
          </Button>
          <Button variant="accent" icon={<Pencil className="size-4" strokeWidth={1.75} />}>
            Label
          </Button>
        </div>
      </section>
    </main>
  );
}
