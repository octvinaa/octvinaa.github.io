import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      "/illustration/illustration1.png",
      "/illustration/illustration2.png",
      "/illustration/illustration3.png",
      "/illustration/illustration4.png",
      "/illustration/illustration5.png",
      "/illustration/illustration6.png",
      "/illustration/illustration7.png",
      "/illustration/illustration8.png",
    ],
  });
}
