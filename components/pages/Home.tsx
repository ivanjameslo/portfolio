"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-center">
        <h1 className="text-4xl md:text-8xl font-bold text-[#14213D]">
          Hi, I’m <span className="text-[#FCA311]">Ivan</span>!
        </h1>
        <p className="text-sm md:text-2xl text-gray-500 leading-snug mt-3">
          A Frontend Developer and<br/>
          an aspiring Full Stack Developer
        </p>
      </div>
    </div>
  );
}
