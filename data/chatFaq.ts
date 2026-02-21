import { company } from "./company";
import { locations } from "./locations";
import { services } from "./services";
import { payRanges } from "./payRanges";
import { featuredJobs } from "./featuredJobs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FaqResult {
  category: string;
  response: string;
  suggestLeadCapture: boolean; // always true – every response should lead toward capture
}

interface FaqCategory {
  name: string;
  keywords: string[];
  buildResponse: () => string;
}

// ---------------------------------------------------------------------------
// Lead-capture flow
// ---------------------------------------------------------------------------

export const leadCaptureSteps = [
  { field: "name", prompt: "What's your name?", promptEs: "¿Cuál es tu nombre?" },
  { field: "company", prompt: "What company are you with? (or type 'skip' if job seeking)", promptEs: "¿Con qué empresa estás? (o escribe 'omitir' si buscas empleo)" },
  { field: "email", prompt: "What's your email address?", promptEs: "¿Cuál es tu correo electrónico?" },
  { field: "phone", prompt: "Phone number? (optional - type 'skip' to finish)", promptEs: "¿Número de teléfono? (opcional - escribe 'omitir' para terminar)" },
] as const;

// ---------------------------------------------------------------------------
// Helper: format a lead-data object into a friendly confirmation message
// ---------------------------------------------------------------------------

export function formatLeadSummary(data: Record<string, string>): string {
  const lines: string[] = [
    `Thanks, ${data.name || "there"}! Here's what I have:`,
    "",
  ];

  if (data.name) lines.push(`• **Name:** ${data.name}`);
  if (data.company && data.company.toLowerCase() !== "skip")
    lines.push(`• **Company:** ${data.company}`);
  if (data.email) lines.push(`• **Email:** ${data.email}`);
  if (data.phone && data.phone.toLowerCase() !== "skip")
    lines.push(`• **Phone:** ${data.phone}`);

  lines.push(
    "",
    `A member of the ${company.name} team will be in touch soon. We appreciate your interest!`
  );

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// FAQ categories
// ---------------------------------------------------------------------------

const faqCategories: FaqCategory[] = [
  // ── Jobs ──────────────────────────────────────────────────────────────
  {
    name: "jobs",
    keywords: [
      "job", "jobs", "position", "positions", "opening", "openings",
      "hiring", "work", "employment", "opportunity",
      "empleo", "trabajo", "oportunidad", "vacante",
    ],
    buildResponse: () => {
      const urgent = featuredJobs.filter((j) => j.urgent);
      const other = featuredJobs.filter((j) => !j.urgent);

      const formatJob = (j: typeof featuredJobs[number]) =>
        `• **${j.title}** – ${j.location} | ${j.payRange} | ${j.shift}${j.urgent ? " 🔥 Urgent" : ""}`;

      const sections: string[] = [
        `Great news — ${company.name} is actively hiring! Here are some of our current openings:`,
      ];

      if (urgent.length) {
        sections.push("", "**Urgently Hiring:**", ...urgent.map(formatJob));
      }
      if (other.length) {
        sections.push("", "**More Openings:**", ...other.map(formatJob));
      }

      sections.push(
        "",
        `Browse all positions and apply online: ${company.externalUrls.jobPortal}`,
        "",
        "Would you like us to help match you with the right position? I can connect you with a recruiter."
      );

      return sections.join("\n");
    },
  },

  // ── Apply ─────────────────────────────────────────────────────────────
  {
    name: "apply",
    keywords: [
      "apply", "application", "how to", "sign up", "register",
      "aplicar", "solicitar", "como",
    ],
    buildResponse: () =>
      [
        `Applying with ${company.name} is easy! Here's how:`,
        "",
        `1. **Visit our job portal:** ${company.externalUrls.jobPortal}`,
        "2. **Browse available positions** and apply online — it only takes a few minutes.",
        "3. **Or visit any of our offices in person** — walk-ins are welcome!",
        "4. **Bring a valid government-issued ID** (driver's license, passport, etc.).",
        "",
        "Want us to reach out to you directly? Share your info and a recruiter will contact you.",
      ].join("\n"),
  },

  // ── Locations ─────────────────────────────────────────────────────────
  {
    name: "locations",
    keywords: [
      "location", "locations", "office", "offices", "where", "address",
      "near me", "branch", "oficina", "ubicacion", "donde",
    ],
    buildResponse: () => {
      const hq = locations.find((l) => l.isHQ);
      const rest = locations.filter((l) => !l.isHQ);

      const fmt = (l: typeof locations[number]) =>
        `• **${l.city}, ${l.state}** – ${l.address} | ${l.phone}`;

      const lines: string[] = [
        `${company.name} has offices across the Southeast! Here's where you can find us:`,
        "",
      ];

      if (hq) {
        lines.push("**Headquarters:**", fmt(hq), "");
      }

      lines.push(...rest.map(fmt));
      lines.push(
        "",
        "Looking for a specific location? Leave your details and we'll connect you with the nearest office."
      );

      return lines.join("\n");
    },
  },

  // ── Hours ─────────────────────────────────────────────────────────────
  {
    name: "hours",
    keywords: [
      "hours", "open", "close", "schedule", "time", "when",
      "horario", "hora",
    ],
    buildResponse: () =>
      [
        `Our office hours are:`,
        "",
        `• ${company.hours.weekdays}`,
        `• ${company.hours.friday}`,
        "",
        `Feel free to call us at ${company.phone} or stop by any of our locations during business hours.`,
        "",
        "Need to schedule a visit? Share your info and we'll set something up.",
      ].join("\n"),
  },

  // ── Pay ───────────────────────────────────────────────────────────────
  {
    name: "pay",
    keywords: [
      "pay", "salary", "wage", "rate", "compensation", "money", "earn",
      "cuanto", "pago", "salario", "sueldo",
    ],
    buildResponse: () => {
      const rows = payRanges.map(
        (p) => `• **${p.role}:** $${p.min} – $${p.max}${p.suffix}`
      );

      return [
        `Here's a look at our typical pay ranges:`,
        "",
        ...rows,
        "",
        "_Pay varies by experience, skills, and location._",
        "",
        "Want to discuss specific pay for your skills? Leave your info and a recruiter can give you a personalized answer.",
      ].join("\n");
    },
  },

  // ── Services ──────────────────────────────────────────────────────────
  {
    name: "services",
    keywords: [
      "service", "services", "staffing", "temp", "temporary", "hire",
      "hiring", "direct", "payroll", "recruitment", "servicio",
    ],
    buildResponse: () => {
      const items = services.map(
        (s) => `• **${s.title}** – ${s.shortDescription}`
      );

      return [
        `${company.name} offers a full range of workforce solutions:`,
        "",
        ...items,
        "",
        `Learn more about our Direct Hire division: ${company.externalUrls.directHire}`,
        "",
        "Interested in our staffing solutions for your business? Share your details and we'll reach out.",
      ].join("\n");
    },
  },

  // ── Employee Portal ───────────────────────────────────────────────────
  {
    name: "employee",
    keywords: [
      "employee", "portal", "paycheck", "paystub", "my account",
      "schedule", "empleado",
    ],
    buildResponse: () =>
      [
        `You can access your employee portal here: ${company.externalUrls.employeePortal}`,
        "",
        "From the portal you can view your pay stubs, schedules, and other account details.",
        "",
        "Having trouble with the portal? Leave your info and HR will help.",
      ].join("\n"),
  },

  // ── Contact ───────────────────────────────────────────────────────────
  {
    name: "contact",
    keywords: [
      "contact", "call", "email", "phone", "reach", "talk", "speak",
      "contacto", "llamar", "hablar",
    ],
    buildResponse: () =>
      [
        `We'd love to hear from you! Here's how to reach ${company.name}:`,
        "",
        `• **Phone:** ${company.phone}`,
        `• **Email:** ${company.email}`,
        `• **Address:** ${company.address.full}`,
        `• **Hours:** ${company.hours.weekdays} | ${company.hours.friday}`,
        "",
        "**Follow us:**",
        `• Facebook: ${company.social.facebook}`,
        `• LinkedIn: ${company.social.linkedin}`,
        "",
        "Or leave your info here and we'll reach out to you.",
      ].join("\n"),
  },

  // ── Business / Staffing Needs ─────────────────────────────────────────
  {
    name: "business",
    keywords: [
      "need workers", "need staff", "need employees", "business",
      "company", "hire workers", "staffing needs",
      "necesito trabajadores", "empresa",
    ],
    buildResponse: () =>
      [
        `${company.name} partners with businesses across the Southeast to deliver reliable, skilled workers — fast. Whether you need temporary labor, temp-to-hire, skilled trades, or direct placement, we tailor our solutions to fit your operation.`,
        "",
        "I'd love to connect you with our team. Can I get your information?",
      ].join("\n"),
  },
];

// ---------------------------------------------------------------------------
// Matching engine
// ---------------------------------------------------------------------------

export function matchFaq(input: string): FaqResult {
  const lower = input.toLowerCase();

  let bestCategory: FaqCategory | null = null;
  let bestScore = 0;

  for (const cat of faqCategories) {
    let score = 0;
    for (const kw of cat.keywords) {
      if (lower.includes(kw)) {
        score++;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestCategory = cat;
    }
  }

  if (bestCategory && bestScore > 0) {
    return {
      category: bestCategory.name,
      response: bestCategory.buildResponse(),
      suggestLeadCapture: true,
    };
  }

  return {
    category: "unknown",
    response:
      "I don't have a specific answer for that, but I can connect you with someone who does. Would you like to share your info so we can help?",
    suggestLeadCapture: true,
  };
}
