import { Logo } from "@/app/components/logo";
import Image from "next/image";

interface BrandingPanelProps {
  headline?: string;
}

export function BrandingPanel({
  headline = "Your memories deserve a beautiful home.",
}: BrandingPanelProps) {
  const year = new Date().getFullYear();

  return (
    <aside className="relative hidden min-h-[280px] overflow-hidden md:block md:w-1/2">
      <Image
        src="/hero-signup.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="50vw"
      />
      <div className="absolute inset-0 bg-secondary-900/50" />

      <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-8 lg:p-12">
        <Logo variant="light" size="lg" showCaret />

        <p className="max-w-md font-headline text-3xl leading-tight font-medium text-inverse lg:text-4xl xl:text-[2.75rem] xl:leading-[1.15]">
          {headline}
        </p>

        <p className="text-inverse/80 text-[10px] tracking-[0.14em] uppercase">
          © Lumora Collective {year}
        </p>
      </div>
    </aside>
  );
}
