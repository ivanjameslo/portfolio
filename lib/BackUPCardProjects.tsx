import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Badges from "@/components/usable-components/Badge";
interface TechItem {
  label: string;
  icon?: React.ReactNode;
}

interface RowCardProps {
    title: string;
    description: string
    image: string;
    link: string;
    techStack?: TechItem[];
    projectPage?: boolean;
}

export default function RowCard({title, description, image, link, techStack = [], projectPage = false}: RowCardProps) {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
            <Card 
                className={cn(
                    "group overflow-hidden rounded-[28px] border-0 bg-white !py-0",
                    "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
                    "transition-all duration-300 ease-out",
                    "hover:bg-[#14213D] hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                )}>
                <CardContent className="p-0 h-full">
                    <div
                        className={cn(
                        "h-full grid grid-cols-1 items-stretch",
                        projectPage ? "md:grid-cols-2" : "md:grid-cols-3"
                        )}
                    >
                        {/* Image */}
                        <div className="relative w-full h-[220px] md:h-full">
                            <Image 
                                src={image} 
                                alt={title} 
                                fill
                                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                            />
                        </div>
                        {/* Content */}
                        <div
                            className={cn(
                                "transition-colors duration-300",
                                projectPage ? "p-6 md:p-10" : "p-6 md:p-8 md:col-span-2"
                            )}
                        >
                            {/* dotted accent */}
                            <div
                                className="mb-4 h-[4px] w-14 rounded-full"
                                style={{
                                    backgroundImage:
                                    "radial-gradient(circle, #facc15 2px, transparent 2px)",
                                    backgroundSize: "7px 7px",
                                }}
                            />
                            <h2
                                className={cn(
                                "font-bold text-[#14213D] group-hover:text-white transition-colors duration-300",
                                projectPage ? "text-xl md:text-3xl" : "text-xl"
                                )}
                            >
                                {title}
                            </h2>
                            <p
                                className={cn(
                                "mt-2 group-hover:text-white transition-colors duration-300",
                                projectPage ? "text-sm md:text-base md:leading-relaxed" : "text-sm md:text-base"
                                )}
                            >
                                {description}
                            </p>

                            {techStack.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-5">
                                {techStack.map((tech) => (
                                    <Badges
                                    key={tech.label}
                                    label={tech.label}
                                    icon={tech.icon}
                                    variant="project"
                                    />
                                ))}
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}