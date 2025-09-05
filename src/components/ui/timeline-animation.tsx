"use client";

import {motion, Variants} from "framer-motion";
import {forwardRef, useEffect, useState, useRef, RefObject} from "react";
import {cn} from "@/lib/utils";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  animationNum: number;
  timelineRef: RefObject<HTMLElement>;
  customVariants?: Variants;
  className?: string;
  [key: string]: any;
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)"
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const TimelineContent = forwardRef<HTMLElement, TimelineContentProps>(
  (
    {
      children,
      as: Component = "div",
      animationNum,
      timelineRef,
      customVariants = defaultVariants,
      className,
      ...props
    },
    ref
  ) => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px"
        }
      );

      const currentElement = timelineRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [timelineRef]);

    const MotionComponent = motion(Component as any);

    return (
      <MotionComponent
        ref={ref || elementRef}
        custom={animationNum}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={customVariants}
        className={cn(className)}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

TimelineContent.displayName = "TimelineContent";
