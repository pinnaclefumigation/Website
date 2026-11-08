import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type BookingPayload = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Partial<BookingPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, propertyType, message } = body;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(propertyType) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.BOOKING_TO_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword || !toEmail) {
    console.error("Missing GMAIL_USER, GMAIL_APP_PASSWORD, or BOOKING_TO_EMAIL env vars.");
    return NextResponse.json(
      { error: "Booking is temporarily unavailable. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Pinnacle Fumigation Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New quote request — ${name} (${propertyType})`,
      text: [
        `New fumigation quote request from the website.`,
        ``,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Property type: ${propertyType}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <h2>New fumigation quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Property type:</strong> ${escapeHtml(propertyType)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send booking email:", error);
    return NextResponse.json(
      { error: "We couldn't send your request. Please call or WhatsApp us instead." },
      { status: 502 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
