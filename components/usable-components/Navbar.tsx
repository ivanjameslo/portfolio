"use client";

import logo from "@/public/logo.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="sticky top-0 inset-x-0 z-50">
            <div className="flex items-center justify-between w-full px-15 py-3 bg-white/90 backdrop-blur shadow-md">
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="Logo" width={150} height={150} />
                </Link>
                <nav className="hidden md:flex space-x-20">
                    <Link href="/" className="text-gray-700 hover:text-gray-900">Projects</Link>
                    <Link href="/" className="text-gray-700 hover:text-gray-900">About Me</Link>
                    <Link href="/" className="text-gray-700 hover:text-gray-900">Contact Me</Link>
                </nav>
            </div>
        </div>
    )
}