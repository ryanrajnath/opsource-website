import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-navy-deep/10 to-orange-action/10 text-orange-action px-4 py-1 rounded-full font-semibold text-xs tracking-wider uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
