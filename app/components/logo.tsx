import { cn } from "@/lib/utils";
import Link from "next/link";

const sizeStyles = {
  sm: "text-lg tracking-[0.06em]",
  md: "text-xl tracking-[0.08em]",
  lg: "text-2xl tracking-[0.1em]",
  xl: "text-[2rem] leading-none tracking-[0.06em] sm:text-[2.25rem]",
} as const;

type LogoSize = keyof typeof sizeStyles;
type LogoVariant = "light" | "dark";

export interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  showCaret?: boolean;
  /** Omit for home link; pass `null` for a non-interactive wordmark */
  href?: string | null;
  className?: string;
}

function LogoWordmark({ variant, size }: { variant: LogoVariant; size: LogoSize }) {
  const isLight = variant === "light";

  return (
    <span
      className={cn(
        "font-headline inline-flex items-baseline font-semibold",
        sizeStyles[size]
      )}
    >
      <span className={isLight ? "text-inverse" : "text-secondary-700"}>Lum</span>
      <span className={isLight ? "text-primary-300" : "text-primary-500"}>ora</span>
    </span>
  );
}

function LogoCaret({ variant }: { variant: LogoVariant }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 8"
      className={cn(
        "size-2.5 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5",
        variant === "light" ? "text-primary-300" : "text-primary-500"
      )}
    >
      <path
        d="M1 2 6 6.5 11 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  size = "md",
  showCaret = false,
  href,
  className,
}: LogoProps) {
  const content = (
    <>
      <LogoWordmark variant={variant} size={size} />
      {showCaret && <LogoCaret variant={variant} />}
    </>
  );

  const wrapperClass = cn(
    "group inline-flex items-center gap-2",
    href !== null && "transition-opacity hover:opacity-90",
    className
  );

  if (href === null) {
    return <span className={wrapperClass}>{content}</span>;
  }

  return (
    <Link href={href ?? "/"} className={wrapperClass} aria-label="Lumora home">
      {content}
    </Link>
  );
}
