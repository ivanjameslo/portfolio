import { forwardRef } from "react";
import workExperience from "@/lib/WorkExperience.json";
import CardWorkExperience from "@/components/usable-components/CardWorkExperience";

interface Props {
  visible: boolean;
}

const WorkExperienceSection = forwardRef<HTMLDivElement, Props>(
  ({ visible }, ref) => {
    return (
      <div
        ref={ref}
        id="work-experience"
        className={`mt-15 w-full px-3 lg:px-40 scroll-mt-32 ${
          visible ? "animate-fade-right" : "before-fade-right"
        }`}
      >
        <h1 className="text-2xl text-[#14213D] lg:text-3xl font-bold text-left">
          Work Experience
        </h1>

        <div className="mt-8 lg:mt-5">
          {workExperience.map((work, index) => (
            <div
                key={work.heading}
                className={`mb-8 last:mb-0 ${
                visible ? "animate-fade-right" : "opacity-0"
                }`}
                style={{
                    animationDelay: `${0.15 + index * 0.5}s`,
                    opacity: 0
                }}
            >
              <CardWorkExperience
                heading={work.heading}
                highlight_details={work.highlight_details}
                description={work.description}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);

WorkExperienceSection.displayName = "WorkExperienceSection";

export default WorkExperienceSection;