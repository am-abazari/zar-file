import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import fsSync from "fs";
import archiver from "archiver";

const BASE_UPLOAD_DIR = process.env.UPLOAD_DIR
  ? path.resolve(process.env.UPLOAD_DIR)
  : path.join(process.cwd(), "uploads", "private");

export async function GET(
  request: Request,
  { params }: { params: Promise<{ batchId: string }> },
) {
  const { batchId } = await params;

  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      batchId,
    )
  ) {
    return NextResponse.json(
      { error: "Invalid batch ID format" },
      { status: 400 },
    );
  }

  const batchDir = path.join(BASE_UPLOAD_DIR, batchId);

  try {
    const stat = await fs.stat(batchDir);
    if (!stat.isDirectory()) {
      return NextResponse.json(
        { error: "Batch directory not found" },
        { status: 404 },
      );
    }

    const files = await fs.readdir(batchDir);
    const fileStats = await Promise.all(
      files.map(async (fileName) => {
        const filePath = path.join(batchDir, fileName);
        const stat = await fs.stat(filePath);
        return stat.isFile() ? fileName : null;
      }),
    );

    const actualFiles = fileStats.filter(Boolean) as string[];

    if (actualFiles.length === 0) {
      return NextResponse.json(
        { error: "Directory is empty" },
        { status: 404 },
      );
    }

    console.log(
      `[Download] Batch ${batchId}: ${actualFiles.length} files found`,
    );

    if (actualFiles.length === 1) {
      const singleFileName = actualFiles[0];
      const singleFilePath = path.join(batchDir, singleFileName);

      const fileStat = await fs.stat(singleFilePath);

      return new NextResponse(fsSync.createReadStream(singleFilePath), {
        status: 200,
        headers: {
          "Content-Type": getMimeType(singleFileName),
          "Content-Disposition": `attachment; filename="${singleFileName}"`,
          "Content-Length": fileStat.size.toString(),
          "Cache-Control": "public, max-age=3600",
          "Last-Modified": fileStat.mtime.toUTCString(),
        },
      });
    }

    const archive = archiver("zip", { zlib: { level: 6 } });

    archive.on("error", (err) => {
      console.error("Archiver error:", err);
      throw err;
    });

    const chunks: Uint8Array[] = [];
    let totalSize = 0;

    archive.on("data", (chunk) => {
      chunks.push(chunk);
      totalSize += chunk.length;
    });

    archive.on("end", () => {
      console.log(`ZIP created: ${totalSize} bytes`);
    });

    for (const fileName of actualFiles) {
      const filePath = path.join(batchDir, fileName);
      archive.file(filePath, { name: fileName });
    }

    await archive.finalize();

    const zipBuffer = Buffer.concat(chunks);
    const zipBlob = new Blob([zipBuffer]);

    const zipFileName = `batch-${batchId.slice(0, 8)}-${actualFiles.length}files.zip`;

    return new NextResponse(zipBlob, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${zipFileName}"`,
        "Content-Length": zipBuffer.length.toString(),
        "Cache-Control": "no-cache",
      },
    });
  } catch (err: any) {
    console.error("[Download Error]", batchId, err);

    if (err.code === "ENOENT") {
      return NextResponse.json({ error: "Batch not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: "Download failed", details: err.message },
      { status: 500 },
    );
  }
}

function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const mimeTypes: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".pdf": "application/pdf",
    ".txt": "text/plain",
    ".doc": "application/msword",
    ".docx":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  };
  return mimeTypes[ext] || "application/octet-stream";
}

export const maxDuration = 60;
