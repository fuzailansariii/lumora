"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { OtpInput } from "@/app/components/ui/otp-input";
import { useState } from "react";

type OtpFormMode = "signup" | "login";

interface OtpAuthFormProps {
  mode: OtpFormMode;
}

export function OtpAuthForm({ mode }: OtpAuthFormProps) {
  const [codeSent, setCodeSent] = useState(false);
  const [otp, setOtp] = useState("");
  const isSignup = mode === "signup";

  function handleSendCode(event: React.FormEvent) {
    event.preventDefault();
    setCodeSent(true);
  }

  function handleVerify(event: React.FormEvent) {
    event.preventDefault();
    // Wire to your OTP provider (e.g. Twilio, Resend, Firebase) when ready.
  }

  function handleResend() {
    setOtp("");
    // Wire resend logic when backend is ready.
  }

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-6" onSubmit={codeSent ? handleVerify : handleSendCode}>
        {isSignup && (
          <Input label="Full Name" name="name" type="text" placeholder="Evelyn Thorne" autoComplete="name" required />
        )}

        <div className="flex flex-col gap-2">
          <Input
            label="Email or Phone"
            name="contact"
            type="text"
            placeholder="evelyn@lumora.com or +1 555 0100"
            autoComplete="username"
            inputMode="email"
            required
          />
          <p className="text-subtle text-xs leading-relaxed">
            We&apos;ll send a one-time code to verify you. No password required.
          </p>
        </div>

        {codeSent && (
          <div className="flex flex-col gap-3">
            <OtpInput value={otp} onChange={setOtp} disabled={!codeSent} />
            <button
              type="button"
              onClick={handleResend}
              className="text-gold self-end text-xs font-medium hover:text-primary-600"
            >
              Resend code
            </button>
          </div>
        )}

        <Button
          type="submit"
          variant="gold"
          className="mt-2 w-full rounded-sm text-xs tracking-[0.14em] uppercase"
          disabled={codeSent && otp.length < 6}
        >
          {codeSent ? (isSignup ? "Verify & Create Account" : "Verify & Sign In") : "Send Verification Code"}
        </Button>
      </form>
    </div>
  );
}
