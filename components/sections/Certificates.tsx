import { forwardRef } from "react";
import certifications from "@/lib/Certificates.json";
import CardCertificates from "@/components/usable-components/CardCertificates";

interface Props {
  visible: boolean;
}

const CertificationsSection = forwardRef<HTMLDivElement, Props>(
  ({ visible }, ref) => {
    return (
      <div
        ref={ref}
        id="certifications"
        className={`mt-15 w-full px-3 lg:px-40 scroll-mt-32 ${
          visible ? "animate-fade-right" : "before-fade-right"
        }`}
      >
        <h1 className="text-2xl text-[#14213D] lg:text-3xl font-bold text-left">
          Certificates
        </h1>

        <div className="mt-8 lg:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {[...certifications].reverse().map((cert, idx, arr) => {
            const total = arr.length;

            const remainder = total % 3;
            const lastRowStartIndex = total - remainder;
            const isInLastRow = remainder !== 0 && idx >= lastRowStartIndex;

            let lgPlacement = "lg:col-span-2";

            if (isInLastRow && remainder === 1) {
              lgPlacement = "lg:col-span-2 lg:col-start-3";
            }

            if (isInLastRow && remainder === 2) {
              const posInLastRow = idx - lastRowStartIndex;
              lgPlacement =
                posInLastRow === 0
                  ? "lg:col-span-2 lg:col-start-2"
                  : "lg:col-span-2 lg:col-start-4";
            }

            const smRemainder = total % 2;
            const smLastRowStartIndex = total - smRemainder;
            const smIsLastSingle =
              smRemainder === 1 && idx >= smLastRowStartIndex;

            const smPlacement = smIsLastSingle
              ? "sm:col-span-2 sm:col-start-1 sm:flex sm:justify-center"
              : "";

            return (
              <div 
                key={cert.cert_title}
                className={`${lgPlacement} ${smPlacement} ${
                    visible ? "animate-fade-right" : "opacity-0"
                }`}
                style={{
                    animationDelay: `${0.15 + idx * 0.3}s`,
                    opacity: 0
                }}
              >
                <div className={smIsLastSingle ? "w-full sm:max-w-[360px]" : "w-full"}>
                  <CardCertificates
                    cert_title={cert.cert_title}
                    name={cert.name}
                    date={cert.date}
                    link={cert.link}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CertificationsSection.displayName = "CertificationsSection";

export default CertificationsSection;