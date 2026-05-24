import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Trainers", href: "#trainers" },
    { name: "Membership", href: "#membership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-pink-100/30 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Elegant Logo Text */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-pink-100/80 flex items-center justify-center group-hover:bg-pink-200/80 transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-pink-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg md:text-xl font-medium tracking-wider text-slate-800 uppercase"
            >
              Fitness Freak
            </span>
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-[9px] uppercase tracking-[0.3em] -mt-1 text-slate-500 font-light"
            >
              Ladies Gym
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-xs uppercase tracking-[0.2em] text-slate-600 hover:text-pink-400 font-light transition-all duration-350 relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-pink-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#membership"
            className="px-6 py-2 border border-pink-200 rounded-full text-xs font-light tracking-widest text-slate-700 bg-white hover:bg-pink-50/50 hover:border-pink-300 transition-all duration-350 shadow-xs"
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-full hover:bg-pink-50/50 transition-colors duration-300 text-slate-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 border-b border-pink-100/30 overflow-hidden shadow-md"
          >
            <div className="px-6 py-8 flex flex-col gap-5 text-center">
              {menuItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-xs uppercase tracking-[0.2em] text-slate-600 hover:text-pink-400 font-light transition-colors py-1 block"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
                href="#membership"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block px-8 py-3 bg-[#EEDFD7]/50 rounded-full text-xs font-light tracking-widest text-slate-700 hover:bg-[#EEDFD7] transition-all"
              >
                JOIN THE SANCTUARY
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
