"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "fallback" | "error">("idle");

  function openMailto(data: FormData) {
    const subject = encodeURIComponent(`Project inquiry from ${data.get("name") || "website visitor"}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nAddress: ${data.get("address")}\nSubject: ${data.get("subject")}\n\nProject details:\n${data.get("message")}`);
    window.location.href = `mailto:norman_aparis@yahoo.com?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { ok?: boolean; fallback?: boolean };

      if (result.fallback) {
        openMailto(data);
        setStatus("fallback");
        return;
      }

      if (!response.ok || !result.ok) throw new Error("Contact request failed");

      form.reset();
      setStatus("success");
    } catch {
      openMailto(data);
      setStatus("fallback");
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <input className="contact-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <div className="form-row">
      <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
      <label><span>Email</span><input name="email" type="email" required placeholder="you@example.com" /></label>
    </div>
    <label><span>Phone</span><input name="phone" placeholder="Your contact number" /></label>
    <label><span>Address</span><input name="address" placeholder="Your address" /></label>
    <label><span>Subject</span><input name="subject" placeholder="Project inquiry subject" /></label>
    <label><span>Tell us about your project</span><textarea name="message" required rows={5} placeholder="A short description is enough to get started." /></label>
    <button className="button button-red" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send inquiry"}</button>
    {status === "success" && <p className="form-status form-status-success" aria-live="polite">Thank you. Your inquiry has been sent.</p>}
    {status === "fallback" && <p className="form-status" aria-live="polite">Your email app should open with the inquiry prepared.</p>}
    {status === "error" && <p className="form-status form-status-error" aria-live="polite">We could not send the form. Please email norman_aparis@yahoo.com directly.</p>}
  </form>;
}
