import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "orange" | "navy" | "none";
  frosted?: boolean;
}

export function Card({ children, className, accent = "none", frosted = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden transition-all duration-300",
        accent === "orange" && "border-l-[3px] border-l-orange-action",
        accent === "navy" && "border-l-[3px] border-l-navy-deep",
        accent === "none" && "border border-slate-200",
        frosted ? "bg-white/70 backdrop-blur-xl border-white/20" : "bg-white",
        "hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
