import { NextResponse } from "next/server";
import data from "@/data/mockData.json";

export async function GET() {
  return NextResponse.json({
    data,
  });
}
