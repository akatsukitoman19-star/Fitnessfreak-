import { motion } from "motion/react";
import { Search } from "lucide-react";

export default function Gallery() {
  const images = [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
      title: "Morning Zen Meditation",
      tag: "YOGA",
      size: "col-span-1 row-span-1",
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      title: "Core Posture Alignment",
      tag: "PILATES",
      size: "col-span-1 lg:col-span-2 row-span-1",
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
      title: "Luxury Aromatherapy Spa",
      tag: "RITUALS",
      size: "col-span-1 row-span-1",
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
      title: "Empowered Muscle Sculpting",
      tag: "STRENGTH",
      size: "col-span-1 row-span-1",
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop",
      title: "Curated Detox Nutrition Cafe",
      tag: "DIET",
      size: "col-span-1 lg:col-span-2 row-span-1",
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
      title: "Therapeutic Core Mobilize",
      tag: "AEROBICS",
      size: "col-span-1 row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[#FAF7F2]/40 rounded-[5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C47365] font-light">VISUAL SANCTUARY</span>
          <h2 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide"
          >
            Moments Of <span className="font-serif italic text-pink-400">Grace & Power</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-200 mx-auto" />
          <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
            Take a visual tour through our warm studios, meditation rooms, organic hydration bar, and active spaces.
          </p>
        </div>

        {/* Dynamic Masonry-adjacent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-pink-50 border border-pink-100/30 aspect-square ${img.size}`}
            >
              {/* Image element with required referrer policy */}
              <img
                src={img.url}
                alt={img.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Sophisticated glassmorphism screen details on Hover */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8 text-left pointer-events-none">
                
                {/* Floating look search glass icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Search className="w-4 h-4 text-white" />
                </div>

                <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] font-light tracking-[0.2em] bg-white/30 backdrop-blur-sm px-2.5 py-1 rounded-full text-white inline-block">
                    {img.tag}
                  </span>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg font-light text-white leading-snug pt-1"
                  >
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
