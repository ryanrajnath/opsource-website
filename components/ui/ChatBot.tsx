"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";
import { matchFaq, leadCaptureSteps, formatLeadSummary } from "@/data/chatFaq";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface LeadCaptureState {
  active: boolean;
  step: number;
  data: Record<string, string>;
  completed: boolean;
}

const AFFIRMATIVE_WORDS = [
  "yes",
  "sure",
  "ok",
  "okay",
  "si",
  "sí",
  "yeah",
  "yep",
  "please",
  "por favor",
  "claro",
  "dale",
  "of course",
];

const SKIP_WORDS = ["skip", "saltar", "no", "next", "siguiente", "n/a", "na"];

export function ChatBot() {
  const { t, locale } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadCapture, setLeadCapture] = useState<LeadCaptureState>({
    active: false,
    step: 0,
    data: {},
    completed: false,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pendingLeadPromptRef = useRef(false);

  const isSpanish = useCallback(
    (text: string): boolean => {
      if (locale === "es") return true;
      const spanishIndicators = [
        "hola",
        "quiero",
        "necesito",
        "trabajo",
        "dónde",
        "donde",
        "cómo",
        "como",
        "qué",
        "que",
        "por favor",
        "gracias",
        "busco",
        "tengo",
        "puedo",
        "hay",
      ];
      const lower = text.toLowerCase();
      return spanishIndicators.some((w) => lower.includes(w));
    },
    [locale]
  );

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing, scrollToBottom]);

  useEffect(() => {
    if (open && !typing) inputRef.current?.focus();
  }, [open, typing]);

  const addBotMessage = useCallback(
    (content: string): Promise<void> => {
      return new Promise((resolve) => {
        setTyping(true);
        const delay = 400 + Math.random() * 200;
        setTimeout(() => {
          setTyping(false);
          setMessages((prev) => [...prev, { role: "assistant", content }]);
          resolve();
        }, delay);
      });
    },
    []
  );

  const startLeadCapture = useCallback(async () => {
    setLeadCapture((prev) => ({ ...prev, active: true, step: 0, data: {} }));
    const step = leadCaptureSteps[0];
    const prompt =
      locale === "es" && step.promptEs ? step.promptEs : step.prompt;
    await addBotMessage(prompt);
  }, [locale, addBotMessage]);

  const processLeadCaptureStep = useCallback(
    async (userText: string) => {
      const currentStep = leadCaptureSteps[leadCapture.step];
      const isSkip = SKIP_WORDS.some((w) =>
        userText.toLowerCase().trim().includes(w)
      );
      const value = isSkip ? "" : userText.trim();

      const newData = { ...leadCapture.data, [currentStep.field]: value };
      const nextStepIndex = leadCapture.step + 1;

      if (nextStepIndex < leadCaptureSteps.length) {
        setLeadCapture((prev) => ({
          ...prev,
          step: nextStepIndex,
          data: newData,
        }));
        const nextStep = leadCaptureSteps[nextStepIndex];
        const prompt =
          locale === "es" && nextStep.promptEs
            ? nextStep.promptEs
            : nextStep.prompt;
        await addBotMessage(prompt);
      } else {
        // Lead capture complete
        const summary = formatLeadSummary(newData);
        await addBotMessage(summary);
        const thankYou =
          locale === "es"
            ? "¡Gracias! Un miembro de nuestro equipo se pondrá en contacto pronto. ¿Hay algo más en lo que pueda ayudarte?"
            : "Thank you! A team member will be in touch soon. Is there anything else I can help with?";
        await addBotMessage(thankYou);
        setLeadCapture({
          active: false,
          step: 0,
          data: {},
          completed: true,
        });
      }
    },
    [leadCapture.step, leadCapture.data, locale, addBotMessage]
  );

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || typing) return;

      const userMsg: Message = { role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");

      // If currently in lead capture, process as lead capture step
      if (leadCapture.active) {
        await processLeadCaptureStep(trimmed);
        return;
      }

      // Check if user is responding affirmatively to a lead capture prompt
      if (pendingLeadPromptRef.current) {
        pendingLeadPromptRef.current = false;
        const isAffirmative = AFFIRMATIVE_WORDS.some((w) =>
          trimmed.toLowerCase().includes(w)
        );
        if (isAffirmative) {
          await startLeadCapture();
          return;
        }
      }

      // FAQ matching
      const spanish = isSpanish(trimmed);
      const result = matchFaq(trimmed);
      await addBotMessage(result.response);

      // Suggest lead capture if appropriate and not already completed
      if (result.suggestLeadCapture && !leadCapture.completed) {
        pendingLeadPromptRef.current = true;
        setTimeout(async () => {
          const transitionMsg =
            spanish || locale === "es"
              ? "¿Te gustaría que un miembro de nuestro equipo se comunique contigo? Solo necesito algunos datos rápidos."
              : "Would you like a team member to reach out to you? I just need a few quick details.";
          await addBotMessage(transitionMsg);
        }, 800);
      }
    },
    [
      typing,
      leadCapture.active,
      leadCapture.completed,
      processLeadCaptureStep,
      startLeadCapture,
      isSpanish,
      locale,
      addBotMessage,
    ]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const suggestions = [
    t("chat.suggestion1"),
    t("chat.suggestion2"),
    t("chat.suggestion3"),
    t("chat.suggestion4"),
  ];

  const leadProgressText = leadCapture.active
    ? locale === "es"
      ? `Paso ${leadCapture.step + 1} de ${leadCaptureSteps.length}`
      : `Step ${leadCapture.step + 1} of ${leadCaptureSteps.length}`
    : null;

  return (
    <>
      {/* Chat Window */}
      <div
        className={cn(
          "fixed z-[100] flex flex-col shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300",
          "inset-0 rounded-none lg:inset-auto lg:bottom-6 lg:right-6 lg:rounded-2xl lg:origin-bottom-right",
          open
            ? "scale-100 opacity-100 lg:w-[380px] lg:h-[min(520px,calc(100vh-8rem))]"
            : "w-0 h-0 scale-90 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-navy-deep to-navy-deep-light text-white shrink-0">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-heading font-semibold text-sm">
              {t("chat.title")}
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
          {messages.length === 0 && !typing && (
            <div className="space-y-3">
              <p className="text-sm text-slate-500 text-center">
                {t("chat.welcome")}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-orange-action hover:text-orange-action transition-colors cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-wrap",
                  msg.role === "user"
                    ? "bg-orange-action text-white rounded-br-sm"
                    : "bg-white border border-slate-200 text-slate-800 rounded-bl-sm"
                )}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed bg-white border border-slate-200 text-slate-800 rounded-bl-sm">
                <TypingDots />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Lead capture progress */}
        {leadProgressText && (
          <div className="px-3 py-1.5 bg-slate-100 border-t border-slate-200 shrink-0">
            <span className="text-xs text-slate-500 font-medium">
              {leadProgressText}
            </span>
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 p-3 border-t border-slate-200 bg-white shrink-0"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("chat.placeholder")}
            disabled={typing}
            className="flex-1 text-base lg:text-sm px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-navy-deep disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={typing || !input.trim()}
            className="p-2 rounded-lg bg-orange-action text-white hover:bg-orange-action-dark disabled:opacity-40 transition-colors cursor-pointer disabled:cursor-not-allowed"
            aria-label="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Floating Bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-20 right-4 z-[100] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer lg:bottom-6 lg:right-6",
          open
            ? "scale-0 opacity-0 pointer-events-none"
            : "bg-navy-deep text-white hover:bg-navy-deep-light hover:shadow-[0_6px_28px_rgba(30,58,138,0.45)] scale-100 opacity-100"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex gap-1 py-1">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0ms]" />
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:150ms]" />
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:300ms]" />
    </span>
  );
}
