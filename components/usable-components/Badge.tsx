"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useBadgeHover } from "./BadgeHoverContext";

type SkillBadgeProps = {
  /** Badge text */
  label: string;
  /** Optional icon (lucide-react recommended) */
  icon?: React.ReactNode;
  /** Color theme (for solid variant) */
  color?: "blue" | "yellow";
  /** Badge behavior */
  variant?: "solid" | "cycle";
  className?: string;
};

export default function Badges({
  label,
  icon,
  color = "blue",
  variant = "solid",
  className,
}: SkillBadgeProps) {
  const isCycle = variant === "cycle";

  // ✅ Only use the context when you're in cycle mode
  const nextColor = isCycle ? useBadgeHover().nextColor : undefined;

  const [isHovered, setIsHovered] = React.useState(false);
  const [activeColor, setActiveColor] = React.useState<"blue" | "yellow">("blue");

  return (
    <Badge
      onMouseEnter={() => {
        if (!isCycle || !nextColor) return;
        setActiveColor(nextColor());
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (!isCycle) return;
        setIsHovered(false);
      }}
      className={cn(
        "flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full",
        "transition-colors duration-300 cursor-default",

        // SOLID (keep your original solid behavior)
        variant === "solid" &&
          color === "blue" &&
          "bg-[#14213D] text-white hover:bg-[#1f2f5a] border-transparent",

        variant === "solid" &&
          color === "yellow" &&
          "bg-[#FCA311] text-[#14213D] hover:bg-[#fbbf24] border-transparent",

        // CYCLE base (white when not hovered)
        isCycle && "bg-white text-[#14213D] border border-[#14213D]/20",

        // CYCLE hover states (only while hovered)
        isCycle &&
          isHovered &&
          activeColor === "blue" &&
          "bg-[#14213D] text-white border-transparent",

        isCycle &&
          isHovered &&
          activeColor === "yellow" &&
          "bg-[#FCA311] text-[#14213D] border-transparent",

        className
      )}
    >
      {icon && (
        <span
          className={cn(
            "flex items-center transition-colors duration-300",

            // Icon coloring for SOLID
            variant === "solid" && color === "blue" && "text-white",
            variant === "solid" && color === "yellow" && "text-[#14213D]",

            // Icon coloring for CYCLE
            isCycle && !isHovered && "text-[#14213D]",
            isCycle && isHovered && activeColor === "blue" && "text-white",
            isCycle && isHovered && activeColor === "yellow" && "text-[#14213D]"
          )}
        >
          {icon}
        </span>
      )}
      {label}
    </Badge>
  );
}
