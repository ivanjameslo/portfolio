import { forwardRef } from "react";
import Badges from "@/components/usable-components/Badge";
import techStack from "@/lib/TechStack.json";
import { iconMap } from "@/lib/iconMap";
import { BadgeHoverProvider } from "@/components/usable-components/BadgeHoverContext";

interface Props {
  visible: boolean;
}

const TechStackSection = forwardRef<HTMLDivElement, Props>(({ visible }, ref) => {
  return (
    <div
      ref={ref}
      id="tech-stack"
      className="mt-15 w-full px-3 lg:px-40 scroll-mt-32"
    >
      <h1 className="text-2xl text-[#14213D] lg:text-3xl font-bold text-left">
        Tech Stack
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8 lg:mt-5">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-4">{category}</h2>

            <BadgeHoverProvider>
              <div className="flex flex-wrap gap-3">
               {items.map((item) => (
                  <Badges
                    key={item.name}
                    label={item.name}
                    icon={iconMap[item.icon]}
                    variant="cycle"
                    className="text-xs sm:text-sm"
                  />
                ))}
              </div>
            </BadgeHoverProvider>
          </div>
        ))}
      </div>
    </div>
  );
});

TechStackSection.displayName = "TechStackSection";

export default TechStackSection;