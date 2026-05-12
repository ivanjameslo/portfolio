"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [showTrail, setShowTrail] = useState(true);

  const [clickGlows, setClickGlows] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const [mobileTrails, setMobileTrails] = useState({
    yellow: { x: 80, y: 180 },
    blue: { x: 260, y: 420 },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      // Trail only shows while home section is still visible
      setShowTrail(rect.bottom > 150);
    };

    const handleClick = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      const isInsideHero =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInsideHero || !showTrail) return;

      const id = Date.now();

      setClickGlows((prev) => [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          id,
        },
      ]);

      setTimeout(() => {
        setClickGlows((prev) => prev.filter((glow) => glow.id !== id));
      }, 6000);
    };

    const animateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (positionRef.current.x - prev.x) * 0.12,
        y: prev.y + (positionRef.current.y - prev.y) * 0.12,
      }));

      requestRef.current = requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleClick);

    handleScroll();
    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);

      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [showTrail]);

  useEffect(() => {
    const moveMobileTrails = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      setMobileTrails({
        yellow: {
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
        },
        blue: {
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
        },
      });
    };

    moveMobileTrails();

    const interval = setInterval(moveMobileTrails, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Desktop cursor trail highlight */}
      <div
        className={[
          "pointer-events-none fixed z-0 hidden h-48 w-48 rounded-full blur-3xl transition-opacity duration-300 md:block",
          showTrail ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          left: trail.x - 96,
          top: trail.y - 96,
          background:
            "radial-gradient(circle, rgba(252,163,17,0.55) 0%, rgba(59,130,246,0.38) 45%, transparent 75%)",
        }}
      />

      <div
        className={[
          "pointer-events-none fixed z-0 hidden h-28 w-28 rounded-full blur-2xl transition-opacity duration-300 md:block",
          showTrail ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          left: trail.x - 56,
          top: trail.y - 56,
          background:
            "radial-gradient(circle, rgba(252,163,17,0.70) 0%, transparent 70%)",
        }}
      />

      <div
        className={[
          "pointer-events-none fixed z-0 hidden h-64 w-64 rounded-full blur-3xl transition-opacity duration-300 md:block",
          showTrail ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          left: trail.x - 128,
          top: trail.y - 128,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.30) 0%, transparent 70%)",
        }}
      />

      {/* Desktop click glows */}
      {clickGlows.map((glow) => (
        <div
          key={glow.id}
          className="pointer-events-none fixed z-0 hidden h-96 w-96 animate-[clickGlow_6s_ease-out_forwards] rounded-full blur-[80px] md:block"
          style={{
            left: glow.x - 192,
            top: glow.y - 192,
            background:
              "radial-gradient(circle, rgba(252,163,17,0.85) 0%, rgba(252,186,64,0.55) 35%, rgba(59,130,246,0.28) 65%, transparent 85%)",
          }}
        />
      ))}

      {/* Mobile animated trails */}
      <div
        className={[
          "pointer-events-none fixed z-0 block h-52 w-52 rounded-full blur-[70px] transition-[transform,opacity] duration-[3500ms] ease-in-out md:hidden",
          showTrail ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          transform: `translate3d(${mobileTrails.yellow.x - 104}px, ${
            mobileTrails.yellow.y - 104
          }px, 0)`,
          background:
            "radial-gradient(circle, rgba(252,163,17,0.65) 0%, rgba(252,186,64,0.35) 45%, transparent 75%)",
        }}
      />

      <div
        className={[
          "pointer-events-none fixed z-0 block h-60 w-60 rounded-full blur-[80px] transition-[transform,opacity] duration-[4200ms] ease-in-out md:hidden",
          showTrail ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          transform: `translate3d(${mobileTrails.blue.x - 120}px, ${
            mobileTrails.blue.y - 120
          }px, 0)`,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.38) 0%, rgba(20,33,61,0.16) 45%, transparent 75%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-[#14213D] md:text-6xl lg:text-8xl">
          Hi, I’m <span className="text-[#FCA311]">Ivan</span>!
        </h1>

        <p className="mt-3 text-sm leading-snug text-gray-500 md:text-lg lg:text-2xl">
          A Frontend Developer and
          <br />
          an aspiring Full Stack Developer
        </p>
      </div>
    </div>
  );
}