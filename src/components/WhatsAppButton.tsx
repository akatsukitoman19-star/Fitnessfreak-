import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <div id="whatsapp-floating" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Decorative tooltip bubble */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: [0, 1, 1], x: [20, 0, 0] }}
        transition={{ delay: 3, duration: 1 }}
        className="hidden md:flex bg-white/95 backdrop-blur-md border border-pink-100/30 px-4 py-2 rounded-2xl shadow-md space-y-0.5 text-left pointer-events-none"
      >
        <div className="flex flex-col">
          <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-xs font-semibold text-slate-800">Chat with Sofia</span>
          <span className="text-[9px] uppercase tracking-wider text-pink-400 font-light">Online Now</span>
        </div>
      </motion.div>

      {/* Main Glowing Button */}
      <a
        href="https://wa.me/918341725523"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Fitness Freak Ladies Gym on WhatsApp"
        className="w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#4eed80] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-108 active:scale-95 transition-all duration-300 animate-pulse-soft focus:outline-none"
      >
        {/* Customized Elegant Pure Vector WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.752 9.752 0 0 0-6.972-2.872c-5.439 0-9.864 4.372-9.868 9.8-.001 1.748.469 3.453 1.36 4.975l-.427 1.56.452.427zm10.434-7.393c-.273-.137-1.62-.8-1.871-.892-.253-.092-.437-.137-.62.137-.183.275-.707.892-.867 1.077-.16.184-.32.206-.593.069-.272-.137-1.15-.424-2.19-1.354-.809-.722-1.355-1.616-1.514-1.89-.16-.274-.017-.422.12-.558.123-.122.274-.32.411-.48.136-.16.183-.274.274-.457.091-.183.045-.343-.023-.48-.068-.137-.62-1.492-.849-2.04-.223-.538-.45-.463-.62-.472-.16-.008-.344-.01-.528-.01-.184 0-.485.069-.739.344-.253.274-.967.946-.967 2.308s.99 2.673 1.127 2.856c.137.183 1.947 2.974 4.717 4.168.658.284 1.173.454 1.574.582.661.21 1.263.18 1.739.109.53-.08 1.62-.663 1.849-1.303.228-.641.228-1.19.16-1.303-.069-.115-.253-.183-.526-.32z" />
        </svg>
      </a>
    </div>
  );
}
