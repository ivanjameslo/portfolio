"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

type CardContactProps = {
  label: string;
  value: string;
  icon: IconType;
  href?: string; // optional: make the whole card clickable
  className?: string;
};

export function CardContact({
  label,
  value,
  icon: Icon,
  href,
  className,
}: CardContactProps) {
  const card = (
    <Card
      className={cn(
        "group rounded-[28px] border-0 bg-white",
        "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
        "transition-all duration-300 ease-out",
        "hover:bg-[#14213D] hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]",
        "flex items-center",
        className
      )}
    >
      <div className="px-8 flex gap-4 items-center w-full">
        <Icon className="h-8 w-8 text-[#FCA311] flex-shrink-0" />

        <div className="min-w-0">
          <h2 className="text-xl font-bold text-[#14213D] group-hover:text-white transition-colors">
            {label}
          </h2>

          {/* min-w-0 + break-words keeps long emails from breaking the layout */}
          <p className="text-sm md:text-base mt-1 text-gray-700 group-hover:text-white transition-colors break-words">
            {value}
          </p>
        </div>
      </div>
    </Card>
  );

  // If href provided, wrap with Link/anchor so entire card is clickable
  if (!href) return card;

  const isExternal = href.startsWith("http");

  return isExternal ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  ) : (
    <Link href={href} className="block">
      {card}
    </Link>
  );
}
