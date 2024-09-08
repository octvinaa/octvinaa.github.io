import { NextResponse } from "next/server";
import portfoliodata from "@/portfolio-data.json";

export async function GET() {
  return NextResponse.json({
    data: portfoliodata,
  });
}
