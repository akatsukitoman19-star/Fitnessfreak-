import { motion } from "motion/react";
import heroImg from "../assets/images/ladies_gym_hero_1779635164374.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2] pt-20">
      {/* Background Graphic Patterns & Glow Effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-pink-100/40 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/12 w-80 h-80 rounded-full bg-indigo-50/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-violet-100/30 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left Side Content - Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start space-y-6 text-left"
        >
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50/60 border border-pink-100/40 rounded-full text-[10px] tracking-widest text-[#C47365] font-light uppercase">
            <span>A LUXURY SANCTUARY FOR WOMEN</span>
          </div>

          {/* Main Elegant Heading */}
          <h1 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-800 leading-tight tracking-wide"
          >
            Fitness, Confidence <br />
            <span className="font-serif italic text-pink-400">& Wellness</span>
          </h1>

          {/* Motivational Subtitle */}
          <p 
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-sm md:text-base text-slate-600 font-light leading-relaxed max-w-lg"
          >
            Embrace your inner grace, feel empowered, and nurture your body. At Fitness Freak, we offer a serene space customized exclusively for women, combining state-of-the-art facilities with warm hospitality.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <a
              href="#membership"
              className="px-8 py-3.5 bg-[#C47365] text-white font-light tracking-widest text-xs rounded-full shadow-md text-center hover:bg-[#B36052] hover:scale-[1.01] transition-all duration-300"
            >
              JOIN TODAY
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 border border-pink-200 text-slate-700 bg-white/60 font-light tracking-widest text-xs rounded-full shadow-xs text-center hover:bg-[#FAF7F2] transition-all duration-300"
            >
              TOUR OUR SPACE
            </a>
          </div>

          {/* Key Quick Stats Details */}
          <div className="grid grid-cols-3 gap-8 pt-6 border-t border-pink-100/40 w-full">
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl md:text-2xl font-light text-slate-800">100%</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-light">Women Focused</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl md:text-2xl font-light text-slate-800">1-on-1</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-light">Care & Coaching</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl md:text-2xl font-light text-slate-800">Luxury</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-light">Spa & Studios</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Content - Visual Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center"
        >
          {/* Framed Image */}
          <div className="relative w-full max-w-md md:max-w-xl aspect-[4/3] sm:aspect-square lg:aspect-[14/15] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white bg-white/40">
            <img 
              src={heroImg} 
              alt="Luxury Fitness Freak Gym Wellness Environment" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            
            {/* Elegant overlay gradient to fit colors */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/10 via-transparent to-lavender-100/10 pointer-events-none" />
          </div>

          {/* Floating Card UI Element */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-6 -left-6 md:left-4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-pink-50 max-w-xs text-left flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0">
              <span className="text-pink-400 font-light">✨</span>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm font-medium text-slate-800">Empowerment Sanctuary</h4>
              <p className="text-[10px] text-slate-500 font-light leading-snug">Relax, stretch, burn, and recover in ultimate feminine luxury.</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
