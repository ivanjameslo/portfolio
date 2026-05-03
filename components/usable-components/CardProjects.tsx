import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RowCardProps {
    title: string;
    description: string
    image: string;
}

export default function RowCard({title, description, image}: RowCardProps) {
    return (
        <Card 
            className={cn(
                "group overflow-hidden rounded-[28px] border-0 bg-white !py-0",
                "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
                "transition-all duration-300 ease-out",
                "hover:bg-[#14213D] hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            )}>
            <CardContent className="p-0 h-full">
                <div className="h-full grid grid-cols-1 md:grid-cols-3 items-stretch">
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
                    <div className="p-6 md:p-8 md:col-span-2 transition-colors duration-300">
                        {/* dotted accent */}
                        <div
                            className="mb-4 h-[4px] w-14 rounded-full"
                            style={{
                                backgroundImage:
                                "radial-gradient(circle, #facc15 2px, transparent 2px)",
                                backgroundSize: "7px 7px",
                            }}
                        />
                        <h2 className="text-xl font-bold text-[#14213D] group-hover:text-white transition-colors duration-300">{title}</h2>
                        <p className="text-sm md:text-base mt-2 group-hover:text-white transition-colors duration-300">{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}