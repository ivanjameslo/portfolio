"use client";

import Image from "next/image";
import Link from "next/link";
import Badges from "@/components/usable-components/Badge";
import { Code, ShieldCheck, Brain, LineChart, Sigma, FileText  } from "lucide-react";
import { Github, Linkedin, Mail  } from 'lucide-react';
import techStack from "@/lib/TechStack.json";
import { iconMap } from "@/lib/iconMap";
import { BadgeHoverProvider } from "@/components/usable-components/BadgeHoverContext";
import workExperience from "@/lib/WorkExperience.json";
import certifications from "@/lib/Certificates.json";
import CardWorkExperience from "@/components/usable-components/CardWorkExperience";
import CardCertificates from "@/components/usable-components/CardCertificates";
import education from "@/lib/Education.json";
import Buttons from "@/components/usable-components/Buttons";

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
                    icon={<Code className="w-3 h-3 sm:w-4 sm:h-4 text-[#FCA311]" />}
                    color="blue"
                    className="text-xs sm:text-sm"
                />

                <Badges
                    label="Cybersecurity"
                    icon={<ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#FCA311]" />}
                    color="blue"
                    className="text-xs sm:text-sm"
                />

                <Badges
                    label="Machine Learning"
                    icon={<Brain className="w-3 h-3 sm:w-4 sm:h-4 text-[#FCA311]" />}
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8 lg:mt-5">
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
          <div className="mt-8 lg:mt-5"> 
            {workExperience.map((work) => ( 
              <div key={work.heading} className="mb-8 last:mb-0"> 
                <CardWorkExperience 
                  heading={work.heading} 
                  highlight_details={work.highlight_details}
                  description={work.description} 
                /> 
              </div> 
            ))} 
          </div> 
        </div>

        {/* Certificates Section */}
        <div className="mt-15 w-full px-3 lg:px-40"> 
          <h1 className="text-2xl text-[#14213D] lg:text-3xl font-bold text-left">Certifications</h1> 
          <div className="mt-8 lg:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {[...certifications].reverse().map((cert, idx, arr) => {
              const total = arr.length;

              // =========================
              // LG CONDITION (KEEP THIS)
              // =========================
              const remainder = total % 3; // last row count on lg (since 3 per row)
              const lastRowStartIndex = total - remainder;

              const isInLastRow = remainder !== 0 && idx >= lastRowStartIndex;

              // Default: normal 3-per-row layout
              let lgPlacement = "lg:col-span-2";

              // If last row has 1 item -> center it
              if (isInLastRow && remainder === 1) {
                lgPlacement = "lg:col-span-2 lg:col-start-3";
              }

              // If last row has 2 items -> place them between the 3 columns above
              if (isInLastRow && remainder === 2) {
                const posInLastRow = idx - lastRowStartIndex; // 0 or 1
                lgPlacement =
                  posInLastRow === 0
                    ? "lg:col-span-2 lg:col-start-2"
                    : "lg:col-span-2 lg:col-start-4";
              }

              // =========================
              // SM (TABLET) FIX (ADD THIS)
              // =========================
              const smRemainder = total % 2; // last row count on sm (2 per row)
              const smLastRowStartIndex = total - smRemainder;
              const smIsLastSingle = smRemainder === 1 && idx >= smLastRowStartIndex;

              const smPlacement = smIsLastSingle
                ? "sm:col-span-2 sm:col-start-1 sm:flex sm:justify-center"
                : "";

              return (
                <div key={cert.cert_title} className={`${lgPlacement} ${smPlacement}`}>
                  {/* Optional: keep card from stretching too wide on tablet when centered */}
                  <div className={smIsLastSingle ? "w-full sm:max-w-[360px]" : "w-full"}>
                    <CardCertificates
                      cert_title={cert.cert_title}
                      name={cert.name}
                      date={cert.date}
                      link={cert.link}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-15 w-full px-3 lg:px-40"> 
          <h1 className="text-2xl text-[#14213D] lg:text-3xl font-bold text-left">Education</h1>
          <div className="mt-8 lg:mt-5">
            {[...education].reverse().map((edu) => (
              <div key={edu.degree} className="flex gap-4 mb-8 last:mb-0">
                <div className="pt-2">
                  <span className="block w-3 h-3 rounded-full bg-[#FCA311]" />
                </div>
                <div>
                  <h2 className="text-lg lg:text-xl font-semibold">{edu.degree}</h2>
                  <p className="text-sm lg:text-base text-gray-500 font-medium mb-2">{edu.institution} | {edu.year_range}</p>
                  <p className="text-sm lg:text-base">Relevant Courseworks: {edu.coursework.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="mt-15 w-full px-3 lg:px-40 flex justify-center mb-20 lg:mb-10"> 
          <Buttons 
            variant="outline" 
            className="group mt-8 w-max"
          >
            <Link href="https://drive.google.com/file/d/1RHO_yaQQ90eWRzaepIPHz8F5bHwt0TDp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
              <FileText className="h-20 w-20 text-[#FCA311] transition-all group-hover:text-white" />
              View My Resume
            </Link>
          </Buttons>
        </div>
    </div>
  );
}
