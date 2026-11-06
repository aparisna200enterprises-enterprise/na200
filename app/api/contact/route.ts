type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  address?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, limit: number) {
  return String(value ?? "").trim().slice(0, limit);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.website, 100)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 160);
  const phone = clean(payload.phone, 80);
  const address = clean(payload.address, 240);
  const subject = clean(payload.subject, 180);
  const message = clean(payload.message, 4000);

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ ok: false, message: "Please complete the required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.CONTACT_EMAIL ?? "norman_aparis@yahoo.com";

  if (!apiKey || !from) {
    return Response.json({ ok: false, fallback: true }, { status: 503 });
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: email,
      subject: subject || `Project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Address: ${address || "Not provided"}`,
        `Subject: ${subject || "Project inquiry"}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    }),
  });

  if (!emailResponse.ok) {
    return Response.json({ ok: false, message: "Email delivery failed." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
