import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  showResume?: boolean;
}

export default function CTASection({
  title = "Have a project or opportunity in mind?",
  description = "I'm open to opportunities where I can contribute, learn, and continue growing as a developer.",
  showResume = true,
}: CTASectionProps) {
  const resumeLink = "/resume.pdf"; // We'll replace this with your actual shared resume link

  return (
    <section 
        id="cta"
        className="relative left-1/2 w-screen -translate-x-1/2 bg-[#14213D] pt-12 pb-18 lg:pt-16 lg:pb-25"
    >
      <div className="mx-auto max-w-5xl px-6 py-8 text-center md:px-12 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311] md:text-sm">
          Let&apos;s Work Together
        </p>

        <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact-me"
            className="group flex items-center gap-2 rounded-full bg-[#FCA311] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#14213D]"
          >
            Contact Me

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {showResume && (
            <Link
              href="https://drive.google.com/file/d/1RHO_yaQQ90eWRzaepIPHz8F5bHwt0TDp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FCA311] hover:text-[#FCA311]"
            >
              View Resume
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}