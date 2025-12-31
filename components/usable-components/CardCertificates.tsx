import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CertificationCardProps {
  cert_title: string;
  name: string;
  date: string;
  link: string;
  className?: string;
}

/** Map provider → accent color */
const PROVIDER_COLORS: Record<string, string> = {
  CISCO: "bg-[#14213D]",
  "Amazon Web Services (AWS)": "bg-[#FCA311]",
  AWS: "bg-[#FCA311]",
  "Tech Advise": "bg-[#14213D]",
};

export default function CertificationCard({
  cert_title,
  name,
  date,
  link,
  className,
}: CertificationCardProps) {
  const accentColor = PROVIDER_COLORS[name] ?? "bg-[#14213D]";

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card
        className={cn(
          "h-full rounded-2xl border border-gray-200 bg-white",
          "shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className
        )}
      >
        <CardContent className="p-6 flex flex-col gap-4">
          {/* Title + Accent */}
          <div className="relative pl-4">
            {/* Accent bar */}
            <span
                className={cn(
                "absolute left-0 top-0 h-full w-1.5 rounded-full",
                accentColor
                )}
            />

            {/* Title */}
            <h2 className="text-lg lg:text-lg font-semibold text-[#14213D] leading-snug">
                {cert_title}
            </h2>
          </div>

          {/* Organization */}
          <p className="text-sm lg:text-base text-gray-500 font-medium">
            {name}
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm lg:text-base text-gray-500 mt-auto">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
