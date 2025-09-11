"use client";
import React, {useState} from "react";
import {motion} from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={props.className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          translateY: "-50%"
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          ...(isHovered && {duration: 0})
        }}
        className="flex flex-col gap-8 pb-8 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({text, image, name, role}, i) => (
                <div
                  className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-ghost-pepper/10 max-w-xs w-full hover:shadow-xl hover:shadow-ghost-pepper/20 smooth-transition group"
                  key={i}
                >
                  <div className="text-muted-foreground leading-relaxed italic mb-6 group-hover:text-ash transition-colors">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full border-2 border-ghost-pepper/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-ash">
                        {name}
                      </div>
                      <div className="leading-5 text-muted-foreground tracking-tight text-sm">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))
        ]}
      </motion.div>
    </div>
  );
};
