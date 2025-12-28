"use client";

import logo from "@/public/logo.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail  } from 'lucide-react';
import { cn } from "@/lib/utils";

const contactLinks = [
  { icon: <Github />, label: "Github", href: "https://github.com/ivanjameslo" },
  { icon: <Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/ivan-james-lo/" },
  { icon: <Mail />, label: "Email", href: "https://mail.google.com/mail/?view=cm&to=ivanjameslo02@gmail.com" },
];

export default function Footer() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const showAt = 160;
        const hideAt = 260;
        let ticking = false;

        const update = () => {
            const scrollY = window.scrollY;
            const viewportH = window.innerHeight;
            const docH = document.documentElement.scrollHeight;

            const distanceFromBottom = docH - (scrollY + viewportH);

            setShow((prev) => {
                if (!prev) return distanceFromBottom <= showAt;
                return distanceFromBottom <= hideAt;
            });

            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
       <footer
        className={cn(
            "fixed bottom-0 inset-x-0 z-50 transition-all duration-200",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        )}
    >
            <div className="flex items-center justify-center w-full px-8 md:px-15 py-2 md:py-5 bg-white/90 backdrop-blur shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.12)]">
                <nav className="flex space-x-8 lg:space-x-20">
                    {contactLinks.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            className="
                                flex flex-col lg:flex-row items-center gap-2
                                text-[#14213D]
                                hover:text-[#FCA311]
                                transition-colors
                            "
                        >
                            {l.icon}
                            <span className="lg:ml-2">{l.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    )
}