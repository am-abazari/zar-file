import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

// functions
import SanitizeFilename from "@functions/SanitizeFilename";
import NanoID from "@functions/nanoID";

const BASE_UPLOAD_DIR = process.env.UPLOAD_DIR
  ? path.join(process.cwd(), process.env.UPLOAD_DIR)
  : path.join(process.cwd(), "public", "uploads");

const MAX_FILE_SIZE: number = process.env.MAX_FILE_SIZE
  ? Number(process.env.MAX_FILE_SIZE)
  : 100 * 1000 * 1024 * 1024; // 100GB
export async function POST(req: NextRequest) {
  try {
    // 1. Create unique batch folder
    const batchId = NanoID();
    const batchDir = path.join(BASE_UPLOAD_DIR, batchId);
    await fs.mkdir(batchDir, { recursive: true });

    // 2. Parse form data
    const formData = await req.formData();

    let files = formData.getAll("files") as File[];
    if (files.length === 0) {
      files = formData.getAll("file") as File[];
    }

    if (files.length === 0) {
      await fs.rm(batchDir, { recursive: true, force: true }).catch(() => {});
      return NextResponse.json(
        { error: 'No files received. Use key "files" or "file".' },
        { status: 400 },
      );
    }

    const results: Array<{
      originalName: string;
      storedName: string;
      size: number;
      type: string;
      relativePath: string;
      error?: string;
    }> = [];

    // Track used names in this batch to avoid collisions
    const usedNames = new Set<string>();

    // 3. Process each file
    for (const file of files) {
      if (!(file instanceof File)) continue;

      if (file.size > MAX_FILE_SIZE) {
        results.push({
          originalName: file.name,
          storedName: "",
          size: file.size,
          type: file.type,
          relativePath: "",
          error: "File too large (max 10MB)",
        });
        continue;
      }

      // Sanitize original name
      let baseName = SanitizeFilename(
        path.basename(file.name, path.extname(file.name)),
      );
      const ext = path.extname(file.name) || ".bin";

      if (!baseName) {
        baseName = "unnamed";
      }

      // Find unique name (add -1, -2, ... if needed)
      let storedName = `${baseName}${ext}`;
      let counter = 1;
      while (usedNames.has(storedName)) {
        storedName = `${baseName}-${counter}${ext}`;
        counter++;
      }

      usedNames.add(storedName);

      const fullPath = path.join(batchDir, storedName);

      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(fullPath, buffer);

      results.push({
        originalName: file.name,
        storedName,
        size: file.size,
        type: file.type,
        relativePath: `public/uploads/${batchId}/${storedName}`,
      });
    }

    const hasErrors = results.some((r) => "error" in r);

    return NextResponse.json({
      success: !hasErrors,
      batchId,
      batchFolder: `/public/uploads/${batchId}`,
      files: results,
      count: results.length,
      message: hasErrors
        ? "Some files uploaded, some rejected"
        : `All ${results.length} file(s) saved with original (sanitized) names in batch ${batchId}`,
    });
  } catch (err) {
    console.error("[Upload Batch Error]", err);
    return NextResponse.json(
      {
        error: "Failed to process upload",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
