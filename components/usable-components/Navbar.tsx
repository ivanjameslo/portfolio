"use client";

import logo from "@/public/logo.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Projects", href: "/" },
  { label: "About Me", href: "/" },
  { label: "Contact Me", href: "/" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Close on outside click
    useEffect(() => {
        function onClickOutside(e: MouseEvent) {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    // Close on ESC
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <header className="sticky top-0 inset-x-0 z-50">
            <div className="flex items-center justify-between w-full px-8 md:px-15 py-5 md:py-3 bg-white/90 backdrop-blur shadow-md">
                <Link href="/" className="flex items-center">
                    <div className="relative w-[110px] md:w-[150px] h-auto">
                        <Image
                        src={logo}
                        alt="Logo"
                        width={150}
                        height={150}
                        priority
                        className="w-full h-auto"
                        />
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-20">
                    {navLinks.map((l) => (
                        <Link key={l.label} href={l.href} className="text-gray-700 hover:text-gray-900">
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile/Tablet hamburger */}
                <div className="relative md:hidden" ref={menuRef}>
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    >
                        {/* 3 lines icon */}
                        <span className="sr-only">Menu</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M4 6h16M4 12h16M4 18h16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                        id="mobile-menu"
                        className={[
                            "absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/10",
                            open ? "block" : "hidden",
                        ].join(" ")}
                    >
                        <div className="flex flex-col p-2">
                        {navLinks.map((l) => (
                            <Link
                                key={l.label}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="rounded-xl px-4 py-3 text-gray-700 hover:bg-black/5 hover:text-gray-900"
                            >
                                {l.label}
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}