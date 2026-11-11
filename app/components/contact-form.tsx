"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljbrnbw";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Contact request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <input className="contact-honeypot" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
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
    {status === "error" && <p className="form-status form-status-error" aria-live="polite">We could not send the form. Please email norman_aparis@yahoo.com directly.</p>}
  </form>;
}
