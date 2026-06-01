import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function slugifyLabel(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? slugifyLabel(label);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-label text-xs font-medium tracking-[0.12em] uppercase">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "h-11 w-full rounded-sm border border-neutral-200 bg-white px-3 text-sm text-body",
          "placeholder:text-neutral-400",
          "transition-colors focus-visible:ring-2 focus-visible:ring-primary-400/40 focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}
