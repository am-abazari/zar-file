import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

const NOTES_DIR = path.join(process.cwd(), "notes");

export async function POST(
  req: NextRequest,
  context: { params: { noteID: string } },
) {
  try {
    const params = await context.params;
    const noteID = params.noteID;

    if (!noteID) {
      return NextResponse.json(
        { error: "noteID is missing or undefined" },
        { status: 400 },
      );
    }

    if (noteID === "undefined" || noteID.trim() === "") {
      return NextResponse.json(
        { error: "noteID cannot be empty or 'undefined'" },
        { status: 400 },
      );
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(noteID)) {
      return NextResponse.json(
        {
          error:
            "Invalid noteID: only letters, numbers, hyphen (-) and underscore (_) allowed",
        },
        { status: 400 },
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const content = String(body.content ?? "");

    if (!content.trim()) {
      return NextResponse.json({ error: "Content is empty" }, { status: 400 });
    }

    const filePath = path.join(NOTES_DIR, `${noteID}.md`);

    await fs.mkdir(NOTES_DIR, { recursive: true });
    await fs.writeFile(filePath, content, "utf-8");

    return NextResponse.json({
      success: true,
      message: "Note saved successfully",
      noteID,
      file: `${noteID}.md`,
    });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Server error" },
      { status: 500 },
    );
  }
}
