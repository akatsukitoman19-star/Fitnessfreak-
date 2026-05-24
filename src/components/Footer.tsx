import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-350 border-t border-slate-800 py-16 relative overflow-hidden">
      {/* Soft background light spot */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-pink-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        {/* Left Col: Brand metadata */}
        <div className="md:col-span-5 space-y-6">
          <a href="#home" className="inline-flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-pink-950 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-pink-300" />
            </div>
            <div className="flex flex-col">
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg font-medium tracking-wider text-slate-100 uppercase"
              >
                Fitness Freak
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] -mt-1 text-slate-400 font-light">
                Ladies Gym & Wellness
              </span>
            </div>
          </a>
          <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
            Hyderabad's ultimate ladies-only wellness sanctuary. Cultivating muscle elegance, metabolic harmony, and self-confidence through hand-designed therapeutic training.
          </p>
        </div>

        {/* Middle Col: Sections Menu */}
        <div className="md:col-span-3 space-y-4">
          <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm font-medium text-slate-100 uppercase tracking-wider">Quick Navigation</h4>
          <ul className="space-y-2 text-xs font-light">
            <li><a href="#home" className="hover:text-pink-300 transition-colors">Home Base</a></li>
            <li><a href="#about" className="hover:text-pink-300 transition-colors">Our Philosophy</a></li>
            <li><a href="#services" className="hover:text-pink-300 transition-colors">Studio Suites</a></li>
            <li><a href="#trainers" className="hover:text-pink-300 transition-colors">Expert Mentors</a></li>
            <li><a href="#membership" className="hover:text-pink-300 transition-colors">Membership Tiers</a></li>
          </ul>
        </div>

        {/* Right Col: Support links & Newsletter */}
        <div className="md:col-span-4 space-y-4">
          <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm font-medium text-slate-100 uppercase tracking-wider">The Wellness Journal</h4>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Subscribe to receive exclusive monthly wellness invitations, hormone care tips, and studio recipes.
          </p>
          <div className="flex gap-2 pt-1.5">
            <label htmlFor="footer-email" className="sr-only">Email Address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Your email address"
              className="bg-slate-800 border border-slate-750 px-4 py-2 text-xs rounded-full focus:outline-none focus:border-pink-400 text-slate-200 font-light flex-grow"
            />
            <button
              aria-label="Subscribe to newsletter"
              className="px-5 py-2 rounded-full bg-pink-400 hover:bg-pink-500 text-white text-xs font-light tracking-wider transition-colors"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright terms */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-12 mt-12 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-light">
        <p>© {currentYear} Fitness Freak Ladies Gym. All Rights Reserved.</p>
        <div className="flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-pink-450 fill-pink-450" />
          <span>for premium women's health.</span>
        </div>
      </div>
    </footer>
  );
}
