"use client";

import { cn } from "@/lib/utils";
import { useRef, type ClipboardEvent, type KeyboardEvent } from "react";

const OTP_LENGTH = 6;

export interface OtpInputProps {
  id?: string;
  label?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function OtpInput({
  id = "otp",
  label = "Verification Code",
  name = "otp",
  value,
  onChange,
  disabled,
}: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = value.padEnd(OTP_LENGTH, " ").slice(0, OTP_LENGTH).split("");

  function updateDigit(index: number, digit: string) {
    const next = digits.map((d, i) => (i === index ? digit : d.trim())).join("").replace(/\s/g, "");
    onChange(next.slice(0, OTP_LENGTH));
  }

  function focusIndex(index: number) {
    inputRefs.current[index]?.focus();
  }

  function handleChange(index: number, raw: string) {
    const digit = raw.replace(/\D/g, "").slice(-1);
    updateDigit(index, digit);
    if (digit && index < OTP_LENGTH - 1) focusIndex(index + 1);
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index]?.trim() && index > 0) {
      focusIndex(index - 1);
    }
    if (event.key === "ArrowLeft" && index > 0) focusIndex(index - 1);
    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) focusIndex(index + 1);
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    onChange(pasted);
    focusIndex(Math.min(pasted.length, OTP_LENGTH - 1));
  }

  return (
    <div className="flex flex-col gap-2">
      <label id={`${id}-label`} className="text-label text-xs font-medium tracking-[0.12em] uppercase">
        {label}
      </label>
      <input type="hidden" name={name} value={value} readOnly />
      <div
        role="group"
        aria-labelledby={`${id}-label`}
        className="flex justify-between gap-2 sm:gap-3"
      >
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? "one-time-code" : "off"}
            maxLength={1}
            value={digit.trim()}
            disabled={disabled}
            aria-label={`Digit ${index + 1} of ${OTP_LENGTH}`}
            className={cn(
              "h-11 w-full max-w-11 rounded-sm border border-neutral-200 bg-white text-center text-sm font-medium text-body",
              "transition-colors focus-visible:ring-2 focus-visible:ring-primary-400/40 focus-visible:outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            onPaste={handlePaste}
            onFocus={(event) => event.target.select()}
          />
        ))}
      </div>
    </div>
  );
}
