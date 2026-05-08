import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { pin }: { pin: string } = await req.json();

  if (!pin) {
    return NextResponse.json({ error: "Pin is required" }, { status: 400 });
  }

  if (pin !== process.env.ADMIN_PIN) {
    return NextResponse.json({ error: "Incorrect Pin" }, { status: 401 });
  }
}
