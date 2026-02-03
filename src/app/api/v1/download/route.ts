import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const BASE_UPLOAD_DIR = process.env.UPLOAD_DIR
  ? path.resolve(process.env.UPLOAD_DIR)
  : path.join(process.cwd(), "uploads", "private");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { batchID } = body;

    if (!batchID || typeof batchID !== "string" || batchID.trim() === "") {
      return NextResponse.json(
        { error: "batchID is required and must be a non-empty string" },
        { status: 400 },
      );
    }

    const sanitizedBatchID = path.basename(batchID.trim());

    if (
      sanitizedBatchID !== batchID.trim() ||
      sanitizedBatchID.includes("..") ||
      sanitizedBatchID.includes("/") ||
      sanitizedBatchID.includes("\\")
    ) {
      return NextResponse.json({ error: "Invalid batchID" }, { status: 400 });
    }

    const targetFolder = path.join(BASE_UPLOAD_DIR, sanitizedBatchID);

    const folderExists =
      fs.existsSync(targetFolder) && fs.statSync(targetFolder).isDirectory();

    if (!folderExists) {
      return NextResponse.json(
        {
          error: "Batch folder not found",
          batchID: sanitizedBatchID,
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        batchID: sanitizedBatchID,
        exists: true,
        message: `Folder "${sanitizedBatchID}" exists`,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error checking batch folder:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
