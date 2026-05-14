import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Fortis Salutis Kontaktformular" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO ?? 'info@fortis-salutis.de',
    replyTo: email,
    subject: `Kontaktanfrage von ${name}`,
    text: [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : '',
      '',
      `Nachricht:`,
      message,
    ]
      .filter((l) => l !== undefined)
      .join('\n'),
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
      <br/>
      <p><strong>Nachricht:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
