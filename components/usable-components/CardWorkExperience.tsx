import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RowCardProps {
  heading: string;
  highlight_details: string;
  description: string[];
}

export default function RowCard({
  heading,
  highlight_details,
  description,
}: RowCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden rounded-[28px] border-0 bg-white !py-0",
        "shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
      )}
    >
      <CardContent className="p-0 h-full">
        <div className="p-6 md:p-8">
          <h2 className="text-xl font-bold text-[#14213D]">
            {heading}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {highlight_details}
          </p>

          {/* Bullet points */}
          <ul className="mt-4 space-y-2 list-none text-sm md:text-base">
            {description.map((item, idx) => (
              <li
                key={idx}
                className="relative ml-1 pl-4 text-sm md:text-base text-[#14213D]
                            before:absolute before:left-0 before:top-[0.6em]
                            before:h-1 before:w-1 before:rounded-full
                            before:bg-[#FCA311]"
            >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}