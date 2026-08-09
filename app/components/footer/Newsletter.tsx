interface NewsletterProps {
  onSubscribe?: (email: string) => void;
}

export function Newsletter({ onSubscribe }: NewsletterProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    onSubscribe?.(email);
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-neutral-900">
        Subscribe to our newsletter
      </h3>

      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="flex-1 border border-neutral-300 px-4 py-3 text-sm outline-none"
          required
        />

        <button
          type="submit"
          className="bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-3 text-xs text-neutral-600">
        By subscribing, you agree to our{" "}
        <a href="#" className="font-semibold hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
