import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";

const contactLinks = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/ivanjameslo",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ivan-james-lo/",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=ivanjameslo02@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#e1e7f0] pt-8 pb-4">
      <div className="mx-auto max-w-7xl px-6 py-3 md:px-8">
        
        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Name / Description */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
                src={logo}
                alt="Ivan Lo Logo"
                priority
                className="h-auto w-[150px] md:w-[180px]"
            />

            <p className="mt-1 text-sm text-gray-500">
              Front-End Developer & Aspiring Full-Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <nav className="flex items-center gap-6">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-white text-[#14213D]
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#FCA311]
                  hover:text-white
                "
              >
                {link.icon}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-[#14213D]/10" />

        {/* Bottom */}
        <div className="flex items-center justify-center text-center text-xs text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Ivan James Lo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}