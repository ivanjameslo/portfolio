"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  /** Badge text */
  label: string;
  /** Optional icon (lucide-react recommended) */
  icon?: React.ReactNode;
  /** Color theme */
  color?: "blue" | "yellow";
  className?: string;
};

export default function Badges({
  label,
  icon,
  color = "blue",
  className,
}: SkillBadgeProps) {
  return (
    <Badge
      className={cn(
        "flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full",
        "transition-colors duration-300",
        color === "blue" &&
          "bg-[#14213D] text-white hover:bg-[#1f2f5a]",
        color === "yellow" &&
          "bg-[#FCA311] text-[#14213D] hover:bg-[#fbbf24]",
        className
      )}
    >
      {icon && <span className="flex items-center text-[#fbbf24]">{icon}</span>}
      {label}
    </Badge>
  );
}
