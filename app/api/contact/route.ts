import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

const SUBMISSIONS_DIR = path.join(process.cwd(), "submissions");
const SUBMISSIONS_FILE = path.join(SUBMISSIONS_DIR, "contact.json");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submission = {
      id: crypto.randomUUID(),
      name,
      email,
      phone: phone || null,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    };

    // Read existing submissions
    let submissions: unknown[] = [];
    try {
      const data = await readFile(SUBMISSIONS_FILE, "utf-8");
      submissions = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    submissions.push(submission);

    await mkdir(SUBMISSIONS_DIR, { recursive: true });
    await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
