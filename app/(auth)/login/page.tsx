import { BrandingPanel } from "@/app/components/auth/branding-panel";
import { OtpAuthForm } from "@/app/components/auth/otp-form";
import { OAuthButtons } from "@/app/components/auth/oauth-buttons";
import { OAuthDivider } from "@/app/components/auth/oauth-divider";
import { Footer } from "@/app/components/footer";
import { Logo } from "@/app/components/logo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In | Lumora",
  description: "Sign in with a one-time verification code sent to your email or phone. No password required.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col md:flex-row">
        <BrandingPanel headline="Welcome back to your beautiful home." />

        <section className="flex w-full flex-col justify-center bg-tertiary-200 px-6 py-10 sm:px-10 md:w-1/2 md:px-12 lg:px-20 lg:py-16">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 md:hidden">
              <Logo variant="dark" size="lg" />
            </div>

            <header className="mb-10">
              <h1 className="font-headline text-headline text-3xl font-semibold tracking-tight sm:text-4xl">
                Welcome Back
              </h1>
              <p className="text-body mt-3 text-sm leading-relaxed">
                Sign in with a code sent to your email or phone.
              </p>
            </header>

            <OtpAuthForm mode="login" />

            <OAuthDivider />
            <OAuthButtons />

            <p className="text-body mt-8 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-gold font-semibold hover:text-primary-600">
                Create Account
              </Link>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
