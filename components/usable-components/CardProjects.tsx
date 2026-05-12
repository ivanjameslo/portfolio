"use client";

import * as React from "react";
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
  subtitle?: string;
  description: string;
  image: string;
  link?: string;
  gallery?: string[];
  techStack?: TechItem[];
  projectPage?: boolean;
}

export default function RowCard({
  title,
  subtitle,
  description,
  image,
  link,
  gallery = [],
  techStack = [],
  projectPage = false,
}: RowCardProps) {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);

  const hasGallery = gallery.length > 0;

  const cardContent = (
    <Card
      className={cn(
        "group overflow-hidden rounded-[28px] border-0 bg-white !py-0 cursor-pointer",
        "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
        "transition-all duration-300 ease-out",
        "hover:bg-[#14213D] hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
      )}
    >
      <CardContent className="p-0 h-full">
        <div
          className={cn(
            "h-full grid grid-cols-1 items-stretch",
            projectPage ? "md:grid-cols-2" : "md:grid-cols-3"
          )}
        >
          <div className="relative w-full h-[220px] md:h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>

          <div
            className={cn(
              "transition-colors duration-300",
              projectPage ? "p-6 md:p-10" : "p-6 md:p-8 md:col-span-2"
            )}
          >
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

            {projectPage && subtitle && (
                <p className="mt-4 mb-4 text-sm italic text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    {subtitle}
                </p>
            )}

            <p
              className={cn(
                "mt-2 group-hover:text-white transition-colors duration-300",
                projectPage
                  ? "text-sm md:text-base md:leading-relaxed"
                  : "text-sm md:text-base"
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
  );

  return (
    <>
      {hasGallery ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full text-left"
        >
          {cardContent}
        </button>
      ) : (
        <Link
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </Link>
      )}

      {open && hasGallery && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 px-4">
          <div className="relative w-full max-w-5xl rounded-[28px] bg-white p-4 shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#14213D] text-white"
            >
              ×
            </button>

            <div className="relative h-[300px] w-full overflow-hidden rounded-[20px] bg-gray-100 md:h-[600px]">
              <Image
                src={gallery[currentImage]}
                alt={`${title} preview ${currentImage + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === 0 ? gallery.length - 1 : prev - 1
                  )
                }
                className="rounded-full bg-[#14213D] px-4 py-2 text-sm text-white"
              >
                ← Previous
              </button>

              <span className="text-sm text-gray-500">
                {currentImage + 1} / {gallery.length}
              </span>

              <button
                type="button"
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === gallery.length - 1 ? 0 : prev + 1
                  )
                }
                className="rounded-full bg-[#FCA311] px-4 py-2 text-sm text-white"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}