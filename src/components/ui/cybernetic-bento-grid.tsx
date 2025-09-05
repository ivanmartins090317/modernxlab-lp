"use client";

import React, {useEffect, useRef} from "react";
import {cn} from "@/lib/utils";

interface BentoItemProps {
  className?: string;
  children: React.ReactNode;
}

// Reusable BentoItem component
const BentoItem = ({className, children}: BentoItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty("--mouse-x", `${x}px`);
      item.style.setProperty("--mouse-y", `${y}px`);
    };

    item.addEventListener("mousemove", handleMouseMove);

    return () => {
      item.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={cn("bento-item group", className)}>
      {children}
    </div>
  );
};

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  span?: string;
}

interface CyberneticBentoGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
}

// Main Component
export const CyberneticBentoGrid = ({
  services,
  title = "Nossas Soluções",
  subtitle = "Oferecemos um portfólio completo de serviços tecnológicos para impulsionar sua empresa para o futuro digital"
}: CyberneticBentoGridProps) => {
  return (
    <div className="main-container">
      <div className="w-full max-w-6xl z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-ash mb-6 font-heading">
            {title}
          </h1>
          <p className="text-xl text-rebel max-w-3xl mx-auto font-body">{subtitle}</p>
        </div>
        <div className="bento-grid">
          {services.map((service, index) => (
            <BentoItem
              key={service.title}
              className={cn("flex flex-col justify-between", service.span)}
            >
              <div>
                <div className="w-12 h-12 bg-ghost-pepper/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ghost-pepper/20 smooth-transition">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-ash font-heading mb-3">
                  {service.title}
                </h2>
                <p className="text-rebel font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-ghost-pepper/10 text-ash text-sm rounded-full font-body"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </BentoItem>
          ))}
        </div>
      </div>
    </div>
  );
};
