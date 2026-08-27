import { forwardRef } from "react";
import education from "@/lib/Education.json";

interface Props {
  visible: boolean;
}

const EducationSection = forwardRef<HTMLDivElement, Props>(({ visible }, ref) => {
  return (
    <div
      ref={ref}
      id="education"
      className="mt-15 w-full px-3 lg:px-40 scroll-mt-32"
    >
      <h1 className="text-2xl text-[#14213D] lg:text-3xl font-bold text-left">
        Education
      </h1>

      <div className="mt-8 lg:mt-5">
        {[...education].reverse().map((edu) => (
          <div key={edu.degree} className="flex gap-4 mb-8 last:mb-0">
            <div className="pt-2">
              <span className="block w-3 h-3 rounded-full bg-[#FCA311]" />
            </div>

            <div>
              <h2 className="text-lg lg:text-xl font-semibold">{edu.degree}</h2>
              <p className="text-sm lg:text-base text-gray-500 font-medium mb-2">
                {edu.institution} | {edu.year_range}
              </p>
              <p className="text-sm lg:text-base">
                Relevant Courseworks: {edu.coursework.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

EducationSection.displayName = "EducationSection";

export default EducationSection;