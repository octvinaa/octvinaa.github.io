import { NextResponse } from "next/server";
import detailData from "@/portfolio-detail-data.json"; // Ensure the path is correct

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // Find the detail entry that matches the provided id
  const detail = detailData.find((item) => item.id.toString() === id.toString());

  if (detail) {
    return NextResponse.json({
      success: true,
      data: detail,
    });
  } else {
    return NextResponse.json({
      success: false,
      message: "Detail not found",
    });
  }
}
