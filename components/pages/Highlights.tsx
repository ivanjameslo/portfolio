"use client";

import RowCard from "@/components/usable-components/RowCard"
import Image from "next/image";
import RowCardData from "../../lib/RowCard.json";
import Buttons from "@/components/usable-components/Buttons";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Highlights() {
  return (
    <section className="p-3 lg:p-50">
      <div className="mx-auto max-w-screen-xl flex flex-col gap-10 w-full">
        <div className="px-5">
          <h1 className="text-2xl text-[#14213D] lg:text-4xl font-bold">Featured Projects</h1>
          <div className="mt-8 lg:mt-5">
            {RowCardData.map((card) => (
              <div key={card.title} className="mb-8 last:mb-0">
                <RowCard 
                  title={card.title} 
                  description={card.description} 
                  image={card.image} 
                />
              </div>
            ))}
            <div className="flex justify-center">
              <Buttons 
                variant="outline" 
                className="group mt-8 w-max"
              >
                <Link href="/about" className="flex items-center gap-4">
                  See All Projects
                  <ArrowRight className="h-20 w-20 text-[#FCA311] transition-all group-hover:text-white" />
                </Link>
              </Buttons>
            </div>
          </div>
        </div>
        <div className="px-5 mt-20">
          <h1 className="text-2xl text-[#14213D] lg:text-4xl font-bold">About Me</h1>
          <div className="mt-8 lg:mt-5 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Image */}
            <div className="relative w-full lg:col-span-2 aspect-[3/4] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <Image 
                src="/profile.jpeg" 
                alt="Profile" 
                fill
                className="object-cover"
              />
            </div>
            {/* Details */}
            <div className="lg:col-span-3 flex flex-col justify-center h-full text-sm md:text-base">
              <p>
                I’m a Front-End Developer passionate about creating intuitive, visually polished, 
                and accessible web applications. With over four years of experience in web development, 
                I focus on building responsive interfaces that balance performance, usability, and 
                thoughtful design, while working toward becoming a full-stack and security-focused developer.
              </p>
              <p className="mt-5">
                I also have two years of experience in machine learning and one year of 
                hands-on exposure to cybersecurity. These areas influence how I solve problems, 
                encouraging me to think beyond the interface and consider data, system behavior, 
                and application security.
              </p>
              <p className="mt-5">
                Outside of projects, I spend my time learning new tech stacks and exploring 
                concepts in cybersecurity and machine learning. I enjoy understanding how these 
                fields connect and applying what I learn to build more reliable and future-ready 
                applications.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Buttons 
                  variant="outline" 
                  className="group mt-8 w-max"
                >
                  <Link href="/about" className="flex items-center gap-4">
                    More About Me
                    <ArrowRight className="h-20 w-20 text-[#FCA311] transition-all group-hover:text-white" />
                  </Link>
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
