import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getMemberBySlug, getRoleLabel, getFromLabel } from "@/lib/weddingParty";

const NOTIFY_EMAILS = [
  "vilmenmatthieu@gmail.com",
  "malongamelly@gmail.com",
];

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  const member = getMemberBySlug(slug);
  if (!member) {
    return NextResponse.json({ error: "Membre introuvable" }, { status: 404 });
  }

  const roleLabel = getRoleLabel(member.role, member.from);
  const fromLabel = getFromLabel(member.from);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = `💍 ${member.name} a dit OUI !`;
  const html = `
    <div style="font-family: Georgia, serif; max-width: 520px; margin: auto; color: #2A1518; background: #FAF7F2; border-radius: 16px; overflow: hidden; border: 1px solid #D9C4A8;">
      <div style="background: #6B2737; padding: 32px 40px; text-align: center;">
        <p style="margin: 0; color: #D9C4A8; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;">Mariage Matthieu & Melly</p>
        <h1 style="margin: 12px 0 0; color: #fff; font-weight: 300; font-size: 32px;">💍 C'est officiel !</h1>
      </div>
      <div style="padding: 40px;">
        <p style="font-size: 18px; line-height: 1.7;">
          <strong>${member.name}</strong> vient d'accepter d'être <em>${roleLabel}</em> pour <strong>${fromLabel}</strong>.
        </p>
        <p style="font-size: 14px; color: #6f5b50; line-height: 1.7;">
          Vous pouvez dès maintenant le/la contacter pour la suite des préparatifs.
        </p>
        <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #D9C4A8; text-align: center;">
          <p style="font-family: cursive; font-size: 28px; color: #6B2737; margin: 0;">Matthieu & Melly</p>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Mariage Matthieu & Melly" <${process.env.SMTP_USER}>`,
      to: NOTIFY_EMAILS.join(", "),
      subject,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Envoi échoué" }, { status: 500 });
  }
}
