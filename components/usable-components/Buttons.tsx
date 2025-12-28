"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = React.ComponentProps<typeof Button> & {
  /** Optional icon element placed before the label */
  leftIcon?: React.ReactNode;
  /** Optional icon element placed after the label */
  rightIcon?: React.ReactNode;
};

export default function PrimaryButton({
  className,
  leftIcon,
  rightIcon,
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        // Base look
        "rounded-lg font-semibold",
        "bg-[#14213D] text-white", // yellow + navy
        "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
        // Hover / active
        "hover:bg-[#f59e0b] active:scale-[0.99]",
        // Focus
        "focus-visible:ring-2 focus-visible:ring-[#FCA311]/50 focus-visible:ring-offset-2",
        // Disabled
        "disabled:opacity-60 disabled:cursor-not-allowed",
        className
      )}
    >
      {leftIcon ? <span className="inline-flex">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="inline-flex">{rightIcon}</span> : null}
    </Button>
  );
}
