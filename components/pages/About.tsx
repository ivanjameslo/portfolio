"use client";

import Image from "next/image";
import Link from "next/link";
import Badges from "@/components/usable-components/Badge";
import { Code, ShieldCheck, Brain, LineChart, Sigma  } from "lucide-react";
import { Github, Linkedin, Mail  } from 'lucide-react';
import techStack from "@/lib/TechStack.json";
import { iconMap } from "@/lib/iconMap";
import { BadgeHoverProvider } from "@/components/usable-components/BadgeHoverContext";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-10 lg:px-20 lg:py-20 w-full">
        <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#14213D]">
            About <span className="text-[#FCA311]">Me</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-500 mt-3 lg:mt-5 flex-wrap px-0 lg:px-70">
            Front-End Developer focused on building intuitive, accessible web applications.
            Aspiring Full-Stack Developer and Security Enthusiast. 
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
                <Badges
                    label="Front-End"
                    icon={<Code className="w-3 h-3 sm:w-4 sm:h-4" />}
                    color="blue"
                    className="text-xs sm:text-sm"
                />

                <Badges
                    label="Cybersecurity"
                    icon={<ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />}
                    color="blue"
                    className="text-xs sm:text-sm"
                />

                <Badges
                    label="Machine Learning"
                    icon={<Brain className="w-3 h-3 sm:w-4 sm:h-4" />}
                    color="blue"
                    className="text-xs sm:text-sm"
                />
            </div>
        </div>

        {/* Image and Details Section */}
        <div className="mt-30 grid grid-cols-1 lg:grid-cols-5 gap-8 px-3 lg:px-40">
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
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start mt-11 gap-4">
                {/* GitHub */}
                <Link
                    href="https://github.com/ivanjameslo"
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 rounded-full
                            bg-[#14213D] text-white
                            transition-colors duration-300
                            hover:bg-[#FCA311]"
                >
                    <Github size={22} />
                </Link>

                {/* LinkedIn */}
                <Link
                    href="https://www.linkedin.com/in/ivan-james-lo/"
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 rounded-full
                            bg-[#14213D] text-white
                            transition-colors duration-300
                            hover:bg-[#FCA311]"
                >
                    <Linkedin size={22} />
                </Link>

                {/* Email (Gmail) */}
                <a
                    href="https://mail.google.com/mail/?view=cm&to=ivanjameslo02@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full
                            bg-[#14213D] text-white
                            transition-colors duration-300
                            hover:bg-[#FCA311]"
                >
                    <Mail size={22} />
                </a>
              </div>
            </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-15 w-full px-3 lg:px-40">
            <h1 className="text-2xl text-[#14213D] lg:text-3xl font-bold text-left">Tech Stack</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h2 className="text-xl font-semibold mb-4">
                    {category}
                  </h2>

                  <BadgeHoverProvider>
                  <div className="flex flex-wrap gap-3">
                    {items.map((item) => (
                      <Badges
                        key={item.name}
                        label={item.name}
                        icon={iconMap[item.icon]}
                        variant="cycle"
                        className="text-xs sm:text-sm"
                      />
                    ))}
                  </div>
                  </BadgeHoverProvider>
                </div>
              ))}
            </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-15 w-full px-3 lg:px-40">
            <h1 className="text-2xl text-[#14213D] lg:text-3xl font-bold text-left">Work Experience</h1>
        </div>
    </div>
  );
}
