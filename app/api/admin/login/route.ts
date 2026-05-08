import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { pin }: { pin: string } = await req.json();

  if (!pin) {
    return NextResponse.json({ error: "Pin is required" }, { status: 400 });
  }

  if (pin !== process.env.ADMIN_PIN) {
    return NextResponse.json({ error: "Incorrect Pin" }, { status: 401 });
  }
  const res = NextResponse.json({ success: true });

  // Set a secure HTTP cookie only that's valid for 8 hours
  res.cookies.set("admin_auth", "true", {
    httpOnly: true, // javascript cannot access the cookie to prevent XSS attacks
    sameSite: "lax", // cookie sent when navigating to the site for CSRF
    maxAge: 60 * 60 * 8, // cookie expires after 8 hours
  });
}
