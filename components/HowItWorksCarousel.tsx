"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Slide {
  image: string
  title: string
  description: string
}

export function HowItWorksCarousel({ slides }: { slides: readonly Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  return (
    <>
      {/* Desktop: Images in full-width row, text centered below */}
      <div className="hidden xl:block">
        <div className="flex justify-center gap-4 mb-12">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`aspect-[9/19] flex-1 max-w-[180px] rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "ring-4 ring-primary scale-105 shadow-xl"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                width={390}
                height={844}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="relative min-h-[200px] w-[40%] text-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="text-8xl font-black text-chart-2/20 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-3xl font-black mb-4 text-balance">{slide.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Slider */}
      <div className="xl:hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-background shadow-lg hover:bg-muted flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-background shadow-lg hover:bg-muted flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="relative aspect-[9/19] overflow-hidden cursor-pointer" onClick={nextSlide}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    width={390}
                    height={844}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative min-h-[240px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentSlide ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className="text-8xl font-black text-chart-2/20 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 text-balance">{slide.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
