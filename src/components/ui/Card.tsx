"use client";

import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlighted" | "elevated";
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className = "", variant = "default", hoverEffect = false, ...props },
    ref
  ) => {
    const baseStyles =
      "rounded-2xl overflow-hidden relative transition-all duration-200";

    const variants = {
      default:
        "bg-gradient-to-br from-card via-card to-secondary/30 border border-border",
      highlighted:
        "bg-gradient-to-br from-card via-card to-secondary/30 border border-primary/30 shadow-[0_0_20px_-5px] shadow-primary/20",
      elevated:
        "bg-surface-elevated border border-border shadow-xl shadow-black/20",
    };

    const hoverStyles = hoverEffect
      ? "hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
      : "";

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

// Card sub-components for flexibility
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`p-4 pb-0 ${className}`} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`p-4 ${className}`} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3 ref={ref} className={`text-lg font-semibold ${className}`} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export { Card, CardHeader, CardContent, CardTitle, CardDescription };
