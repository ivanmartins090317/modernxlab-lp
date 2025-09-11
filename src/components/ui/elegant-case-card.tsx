"use client";

import * as React from "react";
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ExternalLink, LucideIcon} from "lucide-react";

interface ElegantCaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  company: string;
  description: string;
  type: string;
  services: string[];
  result: string;
  imageUrl: string;
  metrics: Array<{
    label: string;
    value: string;
    icon: LucideIcon;
  }>;
}

const ElegantCaseCard = React.forwardRef<HTMLDivElement, ElegantCaseCardProps>(
  (
    {
      className,
      title,
      company,
      description,
      type,
      services,
      result,
      imageUrl,
      metrics,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative min-w-[220px] w-[320px] md:w-[600px] bg-white rounded-2xl overflow-hidden",
          "elegant-shadow hover:shadow-2xl smooth-transition border border-ash/10",
          "hover:-translate-y-2 duration-500",
          className
        )}
        {...props}
      >
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 smooth-transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ash/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <Badge className="mb-2 bg-ghost-pepper text-ash font-semibold">{type}</Badge>
            <h3 className="text-xl font-bold font-heading">{title}</h3>
            <p className="text-white/80 text-sm">{company}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="text-ghost-pepper mx-auto mb-1" size={18} />
                  <div className="font-bold text-ash text-xs">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              );
            })}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Badge key={service} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
          </div>

          {/* Result */}
          <div className="bg-ghost-pepper/10 rounded-lg p-3 border border-ghost-pepper/20">
            <div className="text-sm font-semibold text-ash flex items-center gap-2">
              📈 {result}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="w-full group-hover:bg-ghost-pepper group-hover:text-ash group-hover:border-ghost-pepper smooth-transition"
          >
            Ver Detalhes
            <ExternalLink className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    );
  }
);

ElegantCaseCard.displayName = "ElegantCaseCard";

export {ElegantCaseCard};
export type {ElegantCaseCardProps};
