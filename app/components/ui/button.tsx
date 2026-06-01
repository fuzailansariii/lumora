import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variantStyles = {
  primary: "bg-primary-900 text-inverse hover:bg-primary-800 active:bg-primary-900",
  secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-100",
  inverted: "bg-neutral-800 text-inverse hover:bg-neutral-900 active:bg-neutral-800",
  outlined:
    "border border-neutral-300 bg-transparent text-neutral-700 hover:bg-tertiary-100 active:bg-transparent",
  accent: "bg-primary text-secondary-700 hover:bg-primary-400 active:bg-primary",
  gold: "bg-primary-400 text-neutral-800 hover:bg-primary-500 active:bg-primary-400",
  social:
    "border border-neutral-200 bg-white text-neutral-700 hover:bg-tertiary-100 active:bg-white",
} as const;

const sizeStyles = {
  default: "h-11 px-6 text-sm font-medium",
  sm: "h-9 px-4 text-xs font-medium",
  icon: "size-10 shrink-0 p-0",
  "icon-sm": "size-9 shrink-0 p-0",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  icon,
  children,
  ...props
}: ButtonProps) {
  const isIconOnly = size === "icon" || size === "icon-sm";

  return (
    <button
      type="button"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-sans transition-colors",
        "focus-visible:ring-primary-400 focus-visible:ring-offset-tertiary-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        isIconOnly && "rounded-lg",
        className
      )}
      {...props}
    >
      {icon}
      {!isIconOnly && children}
    </button>
  );
}
