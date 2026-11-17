"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function QuoteForm({ area }: { area?: string }) {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    setFormError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, area }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormStatus("success");
      setFormData({ name: "", phone: "", email: "", propertyType: "", message: "" });
    } catch (err) {
      setFormStatus("error");
      setFormError(
        err instanceof Error ? err.message : "We couldn't send your request. Please call or WhatsApp us instead."
      );
    }
  }

  if (formStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
        <div className="w-14 h-14 bg-hazard flex items-center justify-center">
          <svg className="w-7 h-7 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display uppercase text-brand-deep font-semibold text-xl tracking-tight">
          Request Sent
        </h3>
        <p className="text-ink/60 text-sm max-w-xs">
          Thanks — we&apos;ve received your details and will be in touch
          shortly to confirm your quote.
        </p>
        <button
          onClick={() => setFormStatus("idle")}
          className="font-mono text-xs uppercase tracking-wide text-hazard-deep underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-paper-dim border border-ink/15 text-ink placeholder-ink/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors"
          />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+27 00 000 0000"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-paper-dim border border-ink/15 text-ink placeholder-ink/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-paper-dim border border-ink/15 text-ink placeholder-ink/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors"
        />
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
          Property Type
        </label>
        <select
          required
          value={formData.propertyType}
          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          className="w-full bg-paper-dim border border-ink/15 text-ink rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors appearance-none"
        >
          <option value="">Select property type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="industrial">Industrial</option>
          <option value="hotel">Hotel / Lodge</option>
          <option value="office">Office</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
          Pest Problem / Message
        </label>
        <textarea
          placeholder="Describe the pest problem or any specific requirements..."
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-paper-dim border border-ink/15 text-ink placeholder-ink/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors resize-none"
        />
      </div>

      {formStatus === "error" && (
        <p className="text-rust text-sm font-medium" role="alert">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={formStatus === "sending"}
        className="w-full bg-hazard text-brand-deep font-semibold py-4 rounded-sm hover:bg-hazard-deep hover:text-paper transition-colors mt-2 text-base uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formStatus === "sending" ? "Sending…" : "Send Message & Get Quote"}
      </button>
    </form>
  );
}
