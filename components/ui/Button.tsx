"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "orange" | "navy" | "navy-outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  orange:
    "bg-orange-action text-white hover:bg-orange-action-dark shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_6px_28px_rgba(234,88,12,0.45)]",
  navy:
    "bg-navy-deep text-white hover:bg-navy-deep-light shadow-[0_4px_20px_rgba(30,58,138,0.3)] hover:shadow-[0_6px_28px_rgba(30,58,138,0.45)]",
  "navy-outline":
    "border-2 border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white",
  ghost:
    "text-slate-600 hover:text-slate-800 hover:bg-slate-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm font-semibold",
  lg: "px-8 py-4 text-lg font-bold",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "orange", size = "md", href, external, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-action active:scale-[0.98]",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
export type { ButtonProps };
