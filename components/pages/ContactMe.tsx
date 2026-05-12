"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CardContact } from "@/components/usable-components/CardContact";
import contacts from "@/lib/Contact.json";
import { cn } from "@/lib/utils";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FiMail,
  location: FiMapPin,
};

export default function ContactMe() {
  return (
    <div className="mt-15 flex flex-col items-center justify-center px-3 py-10 lg:px-20 lg:py-20 w-full">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#14213D]">Contact <span className="text-[#FCA311]">Me</span></h1>
          <p className="text-sm md:text-xl text-gray-500 mt-3 lg:mt-5 flex-wrap px-0 lg:px-70">
              Whether you’re working on a project or looking for support on one, feel free to reach out using the contacts below. I’d love to explore how I can contribute.
          </p>
        </div>

        <div className="mt-10 lg:mt-20 px-3 lg:px-55 w-full mb-20 lg:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contacts.map((contact) => (
              <CardContact
                key={contact.label}
                label={contact.label}
                value={contact.value}
                icon={iconMap[contact.icon as keyof typeof iconMap]}
                href={contact.href}
              />
            ))}
          </div>
        </div>
    </div>
  );
}