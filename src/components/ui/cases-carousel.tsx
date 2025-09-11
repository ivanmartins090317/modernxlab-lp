import * as React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface CasesCarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
}

export const CasesCarousel = React.forwardRef<HTMLDivElement, CasesCarouselProps>(
  (
    {
      children,
      className,
      autoPlay = false,
      autoPlayInterval = 5000,
      showArrows = true,
      showIndicators = true,
      ...props
    },
    ref
  ) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);
    const totalSlides = children.length;
    const maxSlide = totalSlides - 1;

    // Auto-play functionality
    React.useEffect(() => {
      if (!autoPlay || isHovered) return;

      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, isHovered, maxSlide]);

    const goToSlide = (slideIndex: number) => {
      setCurrentSlide(Math.max(0, Math.min(slideIndex, maxSlide)));
    };

    const goToPrevious = () => {
      setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    };

    const goToNext = () => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Navigation Arrows - Positioned Above Cards */}
        {showArrows && (
          <div className="flex justify-end items-end mb-6 gap-6">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "bg-white/95 backdrop-blur-sm border-ash/20 hover:bg-ghost-pepper hover:text-ash hover:border-ghost-pepper",
                "smooth-transition shadow-lg hover:shadow-xl",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
              onClick={goToPrevious}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className={cn(
                "bg-white/95 backdrop-blur-sm border-ash/20 hover:bg-ghost-pepper hover:text-ash hover:border-ghost-pepper",
                "smooth-transition shadow-lg hover:shadow-xl",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
              onClick={goToNext}
              disabled={currentSlide === maxSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Carousel Container */}
        <div className="relative overflow-hidden max-w-fit mx-auto">
          {/* Slides Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {children.map((child, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center gap-8 ml-0 md:ml-0 w-full"
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Indicators (Dots) - Positioned Below Cards */}
        {showIndicators && (
          <div className="flex justify-center gap-2 mt-8">
            {children.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 hover:scale-110",
                  currentSlide === index
                    ? "bg-ghost-pepper shadow-lg scale-110"
                    : "bg-ash/20 hover:bg-ash/40"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

CasesCarousel.displayName = "CasesCarousel";
