"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote: "Kakovost majic je fantastična, barve so odlične in logotip je popoln! Ne bi mogla biti bolj zadovoljna s storitvijo!",
    author: "Sara B.",
    location: "Ljubljana, Slovenija"
  },
  {
    quote: "Izjemno hitra dostava in profesionalna komunikacija. Majice so presenetljivo mehke in udobne za nošenje.",
    author: "Marko P.",
    location: "Maribor, Slovenija"
  },
  {
    quote: "Naročili smo večjo količino majic za podjetje in rezultat je presegel vsa pričakovanja. Definitivno priporočam!",
    author: "Ana K.",
    location: "Celje, Slovenija"
  },
  {
    quote: "Odlično razmerje med ceno in kakovostjo. Potisk je zelo obstojen tudi po večkratnem pranju.",
    author: "Luka M.",
    location: "Kranj, Slovenija"
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <button
              onClick={previousTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Prejšnja ocena"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="text-center px-8">
              <blockquote className="text-2xl font-light text-gray-600 italic mb-8">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className="text-gray-500">
                <p className="font-semibold">{testimonials[currentIndex].author}</p>
                <p>{testimonials[currentIndex].location}</p>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Naslednja ocena"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Prikaži oceno ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/mnenja" 
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
            >
              Preberi vsa mnenja naših strank →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}