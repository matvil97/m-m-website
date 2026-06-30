import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const url = process.env.APPS_SCRIPT_URL;

  if (url) {
    const params = new URLSearchParams({
      nom:  body.nom  ?? "",
      role: body.role ?? "",
      de:   body.de   ?? "",
      slug: body.slug ?? "",
      date: body.date ?? "",
    });
    await fetch(`${url}?${params.toString()}`, { method: "GET" });
  }

  return NextResponse.json({ ok: true });
}
