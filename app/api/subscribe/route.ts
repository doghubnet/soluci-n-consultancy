import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email()
});

export async function POST(request: Request) {
  try {
    const payload = schema.parse(await request.json());
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Solución Consultancy <onboarding@resend.dev>',
        to: ['scelta.infinity@gmail.com'],
        subject: 'New Solución Consultancy subscriber',
        text: `New subscriber:\n\nName: ${payload.name}\nEmail: ${payload.email}`
      })
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json({ error: text || 'Email send failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
