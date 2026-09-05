"use client";

import { Code, ShieldCheck, Brain } from "lucide-react";
import RowCard from "@/components/usable-components/CardProjects"
import ProjectML from "@/lib/Project-ML.json";
import ProjectCS from "@/lib/Project-CS.json";
import ProjectDev from "@/lib/Project-Dev.json";
import { useEffect, useState, useRef } from "react";
import CTASection from "@/components/sections/CTASection";

const sections = [
  { id: "development-projects", label: "Development" },
  { id: "cybersecurity-projects", label: "Cybersecurity" },
  { id: "machine-learning-projects", label: "Machine Learning" },
];

export default function Projects() {
    // Navigation active state
    const [active, setActive] = useState("");

    // Section visibility states
    const devRef = useRef<HTMLElement | null>(null);
    const cyberRef = useRef<HTMLElement | null>(null);
    const mlRef = useRef<HTMLElement | null>(null);

    const [showSections, setShowSections] = useState({
    dev: false,
    cyber: false,
    ml: false,
    });

    // Navigation scroll listener
    useEffect(() => {
        const handleScroll = () => {
        let current = "";

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) {
                const offset = el.offsetTop - 150; // adjust for navbar
                if (window.scrollY >= offset) {
                    current = section.id;
                }
            }
        });

        setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Section visibility scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const cta = document.getElementById("cta");

            // Disable all project navigation dots once CTA is reached
            if (cta) {
            const ctaRect = cta.getBoundingClientRect();

            if (ctaRect.top <= window.innerHeight * 0.7) {
                setActive("");
                return;
            }
            }

            let current = "";

            sections.forEach((section) => {
            const el = document.getElementById(section.id);

            if (el) {
                const rect = el.getBoundingClientRect();

                if (rect.top <= 180) {
                current = section.id;
                }
            }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
        <div>
            <div className="mt-25 relative flex flex-col items-center justify-center px-3 pt-10 lg:mt-15 lg:px-20 lg:py-20 w-full">
                {/* Left Dot Navigation */}
                <nav className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
                    {sections.map((section) => {
                        const isActive = active === section.id;

                        return (
                            <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="relative flex items-center group/item"
                            >
                            <div
                                className={`h-3 w-3 rounded-full transition ${
                                isActive
                                    ? "bg-[#FCA311] scale-125"
                                    : "bg-gray-400 group-hover/item:bg-[#FCA311]"
                                }`}
                            />

                            <span
                                className={`absolute left-6 whitespace-nowrap rounded bg-white px-2 py-1 text-xs shadow transition-all ${
                                isActive
                                    ? "opacity-100 translate-x-0 text-[#FCA311]"
                                    : "opacity-0 -translate-x-2 text-gray-500 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                                }`}
                            >
                                {section.label}
                            </span>
                            </a>
                        );
                    })}
                </nav>
                
                <div className="text-center">
                    <h1 className="animate-fade-up text-5xl md:text-7xl font-bold text-[#14213D]"><span className="text-[#FCA311]">My</span> Projects</h1>
                    <p className="animate-fade-up-delay text-sm md:text-xl text-gray-500 mt-3 lg:mt-5 flex-wrap px-0 lg:px-70">
                        Showcasing skills and experience through a variety of web development, security, and machine learning projects.
                    </p>
                </div>

                {/* Development Projects */}
                <section
                    ref={devRef}
                    id="development-projects"
                    className="scroll-mt-25 mt-10 md:mt-20 w-full px-3 lg:px-40"
                >
                    <div className="mb-8">
                        <div className="flex items-center gap-3">
                            <Code className="text-[#FCA311] mr-3 h-7 w-7"/>
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#14213D]">
                                Development Projects
                            </h2>
                        </div>

                        <p className="mt-3 text-gray-500">
                            Development projects focused on creating web applications and implementing modern development practices.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {ProjectDev.map((project) => (
                            <RowCard
                                key={project.title}
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                image={
                                project.image && project.image.length > 0
                                    ? project.image
                                    : "/sample.jpeg"
                                }
                                link={project.link}
                                techStack={project.techStack}
                                projectPage={project.featured}
                            />
                        ))}
                    </div>
                </section>

                {/* Cybersecurity Projects */}
                <section
                    ref={cyberRef}
                    id="cybersecurity-projects"
                    className="scroll-mt-25 mt-20 w-full px-3 lg:px-40"
                >
                    <div className="mb-8">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-[#FCA311] mr-3 h-7 w-7"/>
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#14213D]">
                                Cybersecurity Projects
                            </h2>
                        </div>

                        <p className="mt-3 text-gray-500">
                            Cybersecurity projects focused on securing systems, analyzing network activity, and applying practical security concepts to real-world scenarios.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {ProjectCS.map((project) => (
                            <RowCard
                                key={project.title}
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                image={
                                project.image && project.image.length > 0
                                    ? project.image
                                    : "/sample.jpeg"
                                }
                                gallery={project.gallery}
                                techStack={project.techStack}
                                projectPage={project.featured}
                            />
                        ))}
                    </div>
                </section>

                {/* Machine Learning Projects */}
                <section
                    ref={mlRef}
                    id="machine-learning-projects"
                    className="scroll-mt-25 mt-20 w-full px-3 lg:px-40 mb-15"
                >
                    <div className="mb-8">
                        <div className="flex items-center gap-3">
                            <Brain className="text-[#FCA311] mr-3 h-7 w-7"/>
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#14213D]">
                                Machine Learning Projects
                            </h2>
                        </div>

                        <p className="mt-3 text-gray-500">
                            Data-driven projects focused on forecasting, predictive modeling, and
                            transforming machine learning outputs into accessible user interfaces.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {ProjectML.map((project) => (
                            <RowCard
                                key={project.title}
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                image={
                                project.image && project.image.length > 0
                                    ? project.image
                                    : "/sample.jpeg"
                                }
                                link={project.link}
                                techStack={project.techStack}
                                projectPage={project.featured}
                            />
                        ))}
                    </div>
                </section>
            </div>

            <CTASection />
        </div>
    );
}
