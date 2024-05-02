import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl;
  console.log(params);
  return NextResponse.json({ message: "hello" });
}
