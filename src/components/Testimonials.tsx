import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "test-1",
      name: "Dr. Roshni Reddy",
      role: "Pediatrician, Hyderabad",
      review: "The serenity here is genuinely unmatched. After busy clinic shifts, I can workout in complete private comfort. Sofia's customized resistance strategy and the tranquil space have completely revitalized my mobility and spine health.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Meera Sen",
      role: "Eco-Fashion Designer",
      review: "Fitness Freak has become my daily digital detox and healing ritual. From the welcoming lemongrass aroma as you walk in, to the light-filled pilates suites led by Priya, it feels more like a 5-star mountain spa than a standard gym.",
      rating: 5,
    },
    {
      id: "test-3",
      name: "Kavitha Krishnan",
      role: "VP of Engineering, Gachibowli",
      review: "Finding a high-end, ladies-only gym in Hyderabad that offers clinical grade alignment, strength, and premium hygiene was a challenge until I found this sanctuary. The elite suite packages are worth every therapeutic minute.",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay function
  useEffect(() => {
    timerRef.current = setInterval(slideNext, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const resetAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(slideNext, 6000);
    }
  };

  const handleNextClick = () => {
    resetAutoplay();
    slideNext();
  };

  const handlePrevClick = () => {
    resetAutoplay();
    slidePrev();
  };

  // Animation variants for slider
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Soft circular pastel overlays */}
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-pink-100/30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-violet-100/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C47365] font-light">HEARTFELT EXPERIENCES</span>
          <h2 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide"
          >
            Adored By <span className="font-serif italic text-pink-400">Radiant Ladies</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-200 mx-auto" />
        </div>

        {/* Testimonials Slider Body */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12 flex flex-col items-center">
          
          {/* Quote Mark Backdrops */}
          <div className="absolute -top-12 left-4 md:left-8 opacity-10 text-slate-400">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="relative w-full overflow-hidden min-h-[320px] md:min-h-[250px] flex items-center justify-center p-6 md:p-10 bg-white/70 backdrop-blur-md border border-pink-100/30 rounded-[3rem] shadow-xs">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full flex flex-col items-center text-center space-y-6"
              >
                {/* 5 Star Ratings Row */}
                <div className="flex gap-1 justify-center">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current text-pink-400 stroke-none" />
                  ))}
                </div>

                {/* Review Body Text */}
                <p 
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-xl md:text-2xl font-light text-slate-700 italic leading-relaxed max-w-2xl"
                >
                  "{testimonials[index].review}"
                </p>

                {/* Speaker Identity */}
                <div className="space-y-0.5">
                  <h4 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-sm font-medium tracking-wide text-slate-800"
                  >
                    {testimonials[index].name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#C47365] font-light">
                    {testimonials[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls buttons */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={handlePrevClick}
              aria-label="Previous Testimonial"
              className="p-3 border border-pink-100 bg-white hover:bg-pink-50 rounded-full text-slate-500 hover:text-pink-400 hover:border-pink-200 transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slider Bullet Dots Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    resetAutoplay();
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-[#C47365]" : "w-2 bg-pink-200/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextClick}
              aria-label="Next Testimonial"
              className="p-3 border border-pink-100 bg-white hover:bg-pink-50 rounded-full text-slate-500 hover:text-pink-400 hover:border-pink-200 transition-all shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
