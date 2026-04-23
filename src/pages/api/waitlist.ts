import type { APIRoute } from 'astro';

const UPSTREAM_URL =
  import.meta.env.WAITLIST_API_URL ?? 'https://api.econutrix.dvlsft.dev/v1/waitlist';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body?.email === 'string' ? body.email.trim() : '';

    if (!email) {
      return new Response(JSON.stringify({ error: 'email inválido' }), {
        status: 422,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const upstreamResponse = await fetch(UPSTREAM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const text = await upstreamResponse.text();

    return new Response(text || '{}', {
      status: upstreamResponse.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'no se pudo procesar la solicitud' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
