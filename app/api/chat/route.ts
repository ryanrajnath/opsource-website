import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

import { company } from "@/data/company";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { featuredJobs } from "@/data/featuredJobs";
import { payRanges } from "@/data/payRanges";

// Simple in-memory rate limiter: 20 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

const SYSTEM_PROMPT = `You are the OpSource Staffing virtual assistant on their website. Be helpful, warm, and professional. Keep answers concise (2-4 short paragraphs max). Use plain text only — no markdown, no bullet symbols like "•" or "-", no asterisks. When listing items, use simple numbered lists or short sentences.

Your goal: answer questions about the company and gently guide visitors toward applying for a job or connecting with a recruiter.

COMPANY INFO:
Name: ${company.name}
Tagline: "${company.tagline}"
Phone: ${company.phone}
Email: ${company.email}
Address: ${company.address.full}
Hours: ${company.hours.weekdays} | ${company.hours.friday}
CEO: ${company.ceoQuote.author}, ${company.ceoQuote.title}
Job Portal: ${company.externalUrls.jobPortal}
Employee Portal: ${company.externalUrls.employeePortal}
Direct Hire: ${company.externalUrls.directHire}
Facebook: ${company.social.facebook}
LinkedIn: ${company.social.linkedin}

OFFICE LOCATIONS:
${locations.map((l) => `${l.city}, ${l.state} — ${l.address} | ${l.phone}${l.isHQ ? " (HQ)" : ""}`).join("\n")}

SERVICES:
${services.map((s) => `${s.title}: ${s.shortDescription}`).join("\n")}

CURRENT JOB OPENINGS:
${featuredJobs.map((j) => `${j.title} — ${j.location} | ${j.payRange} | ${j.shift}${j.urgent ? " (Urgently Hiring)" : ""}`).join("\n")}

PAY RANGES:
${payRanges.map((p) => `${p.role}: $${p.min}-$${p.max}${p.suffix}`).join("\n")}

RULES:
1. Only answer questions related to OpSource Staffing, jobs, staffing services, and employment. For off-topic questions, politely redirect.
2. If the user speaks Spanish, respond in Spanish.
3. Never fabricate information. If you don't know something, say so and offer to connect them with a team member.
4. When appropriate, suggest the user share their contact info so a recruiter can reach out.
5. Keep responses short and conversational — this is a chat widget, not an essay.
6. Do NOT use markdown formatting, bullet points, or special characters. Write in plain conversational text.`;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment." },
        { status: 429 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const { messages } = (await req.json()) as {
      messages: { role: "user" | "assistant"; content: string }[];
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Build Gemini chat history from prior messages
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        {
          role: "model",
          parts: [
            {
              text: "Understood. I'm the OpSource Staffing virtual assistant. I'll be helpful, concise, and guide visitors toward applying or connecting with a recruiter. How can I help?",
            },
          ],
        },
        ...history,
      ],
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastMessage);
    const text = result.response.text();

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
