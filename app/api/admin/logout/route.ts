import { NextResponse } from "next/server";

export async function POST() {
  // Create a response object with a json body of "success: true"
  const res = NextResponse.json({ success: true });

  //   Clears the auth cookie
  res.cookies.set("admin_auth", "", {
    httpOnly: true, // matches the original login cookie setting
    maxAge: 0, // deletes the cookie
  });
  return res;
}
