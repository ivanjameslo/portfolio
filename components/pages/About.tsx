"use client";

import Image from "next/image";
import Link from "next/link";
import Badges from "@/components/usable-components/Badge";
import { Code, ShieldCheck, Brain, FileText  } from "lucide-react";
import { Github, Linkedin, Mail  } from 'lucide-react';
import Buttons from "@/components/usable-components/Buttons";
import { useEffect, useState, useRef } from "react";
import TechStackSection from "../sections/TechStack";
import WorkExperienceSection from "../sections/WorkExperience";
import CertificatesSection from "../sections/Certificates";
import EducationSection from "../sections/Education";
import CTASection from "@/components/sections/CTASection";

const sectionIds = [
    "tech-stack",
    "work-experience",
    "certifications",
    "education",
    "cta",
  ];

export default function About() {

  // Navigation active state
  const [active, setActive] = useState("");

  // Section visibility states 
  const techStackRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const certRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);

  const [visibleSections, setVisibleSections] = useState({
    techStack: false,
    work: false,
    cert: false,
    education: false,
    resume: false,
    cta: false,
  });

  // Navigation scroll listener
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop - 150; // adjust for navbar
          if (window.scrollY >= offset) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section scroll listener
  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === techStackRef.current) setVisibleSections((prev) => ({ ...prev, techStack: true }));
            if (entry.target === workRef.current) setVisibleSections((prev) => ({ ...prev, work: true }));
            if (entry.target === certRef.current) setVisibleSections((prev) => ({ ...prev, cert: true }));
            if (entry.target === educationRef.current) setVisibleSections((prev) => ({ ...prev, education: true }));
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const refs = [
      techStackRef.current,
      workRef.current,
      certRef.current,
      educationRef.current,
    ];

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="mt-15 flex flex-col items-center justify-center px-3 pt-10 pb-0 lg:px-20 lg:pt-20 lg:pb-0 w-full">

          {/* Navigation */}
          <nav className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
            {[
              { label: "Tech Stack", href: "#tech-stack" },
              { label: "Work Experience", href: "#work-experience" },
              { label: "Certifications", href: "#certifications" },
              { label: "Education", href: "#education" },
            ].map((item) => {
              const isActive = active === item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative flex items-center group/item"
                >
                  {/* Dot */}
                  <div
                    className={`h-3 w-3 rounded-full transition ${
                      isActive
                        ? "bg-[#FCA311] scale-125"
                        : "bg-gray-400 group-hover/item:bg-[#FCA311]"
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`absolute left-6 whitespace-nowrap rounded bg-white px-2 py-1 text-xs shadow transition-all ${
                      isActive
                        ? "opacity-100 translate-x-0 text-[#FCA311]"
                        : "opacity-0 -translate-x-2 text-gray-500 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="text-center">
              <h1 className="animate-fade-up text-5xl md:text-7xl font-bold text-[#14213D]">
              About <span className="text-[#FCA311]">Me</span>
              </h1>
              <p className="animate-fade-up-delay text-sm md:text-xl text-gray-500 mt-3 lg:mt-5 flex-wrap px-0 lg:px-70">
              Front-End Developer focused on building intuitive, accessible web applications.
              Aspiring Full-Stack Developer and Security Enthusiast. 
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                {[
                  {
                    label: "Front-End",
                    icon: <Code className="w-3 h-3 sm:w-4 sm:h-4 text-[#FCA311]" />,
                  },
                  {
                    label: "Cybersecurity",
                    icon: <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#FCA311]" />,
                  },
                  {
                    label: "Machine Learning",
                    icon: <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-[#FCA311]" />,
                  },
                ].map((badge, index) => (
                  <div
                    key={badge.label}
                    className="animate-fade-up-delay"
                    style={{
                      animationDelay: `${0.15 + index * 0.12}s`,
                      opacity: 0,
                    }}
                  >
                    <Badges
                      label={badge.label}
                      icon={badge.icon}
                      color="blue"
                      className="text-xs sm:text-sm"
                    />
                  </div>
                ))}
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
          <TechStackSection
            ref={techStackRef}
            visible={visibleSections.techStack}
          />

          {/* Work Experience Section */}
          <WorkExperienceSection
            ref={workRef}
            visible={visibleSections.work}
          />

          {/* Certificates Section */}
          <CertificatesSection
            ref={certRef}
            visible={visibleSections.cert}
          />

          {/* Education Section */}
          <EducationSection
            ref={educationRef}
            visible={visibleSections.education}
          />

          {/* Resume Section */}
          <div className="w-full px-3 lg:px-40 flex justify-center pt-20 pb-25">
            <Buttons
              variant="outline"
              className="group w-max"
            >
              <Link
                href="https://drive.google.com/file/d/1RHO_yaQQ90eWRzaepIPHz8F5bHwt0TDp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <FileText className="h-20 w-20 text-[#FCA311] transition-all group-hover:text-white" />
                View My Resume
              </Link>
            </Buttons>
          </div>
      </div>

      <CTASection />
    </div>
  );
}
