import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      "/illustration/illustration1.webp",
      "/illustration/illustration2.webp",
      "/illustration/illustration3.webp",
      "/illustration/illustration4.webp",
      "/illustration/illustration5.webp",
      "/illustration/illustration6.webp",
      "/illustration/illustration7.webp",
      "/illustration/illustration8.webp",
    ],
  });
}
