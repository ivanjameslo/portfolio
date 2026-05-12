"use client";

import logo from "@/public/logo.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About Me", href: "/about" },
  { label: "Contact Me", href: "/contact-me" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
        setOpen(false);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={[
        "fixed top-4 inset-x-0 z-50 px-4 md:px-8 transition-transform duration-300 ease-in-out",
        hidden ? "-translate-y-28" : "translate-y-0",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/30 bg-white/70 px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-xl md:px-8">
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="relative w-[100px] md:w-[135px]">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
              priority
              className="h-auto w-full"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-full px-5 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white/70 hover:text-gray-950"
            >
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
            className="inline-flex items-center justify-center rounded-full p-2 text-gray-700 transition hover:bg-white/70 hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <span className="sr-only">Menu</span>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          {/* Dropdown */}
          <div
            id="mobile-menu"
            className={[
              "absolute right-0 mt-4 w-56 overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-xl shadow-black/10 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-200",
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-95 opacity-0",
            ].join(" ")}
          >
            <div className="flex flex-col p-2">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-white/70 hover:text-gray-950"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}