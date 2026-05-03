"use client";

import Badges from "@/components/usable-components/Badge";
import { Code, ShieldCheck, Brain, LineChart, Sigma, FileText  } from "lucide-react";
import CardProjects from "@/components/usable-components/CardProjects"
import Image from "next/image";
import RowCardData from "../../lib/RowCard.json";
import Buttons from "@/components/usable-components/Buttons";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-10 lg:px-20 lg:py-20 w-full">
        <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#14213D]"><span className="text-[#FCA311]">My</span> Projects</h1>
            <p className="text-sm md:text-xl text-gray-500 mt-3 lg:mt-5 flex-wrap px-0 lg:px-70">
                Showcasing skills and experience through a variety of web development, security, and machine learning projects.
            </p>
        </div>

        {/* Development Projects */}
        <div className="mt-30 px-3 lg:px-40 self-start">
            <h2 className="flex flex-row items-center text-[#14213D] text-2xl lg:text-3xl font-bold">
                <Code className="mr-3 h-7 w-7 text-[#FCA311]" />
                Development Projects
            </h2>
            <div className="mt-8 lg:mt-5">

            </div>
        </div>

        {/* Cybersecurity Projects */}
        <div className="mt-30 px-3 lg:px-40 self-start">
            <h2 className="flex flex-row items-center text-[#14213D] text-2xl lg:text-3xl font-bold">
                <ShieldCheck className="mr-3 h-7 w-7 text-[#FCA311]" />
                Cybersecurity Projects
            </h2>
            <div className="mt-8 lg:mt-5">

            </div>
        </div>

        {/* Machine Learning Projects */}
        <div className="mt-30 px-3 lg:px-40 self-start">
            <h2 className="flex flex-row items-center text-[#14213D] text-2xl lg:text-3xl font-bold">
                <Brain className="mr-3 h-7 w-7 text-[#FCA311]" />
                Machine Learning Projects
            </h2>
            <div className="mt-8 lg:mt-5">

            </div>
        </div>
    </div>
  );
}
