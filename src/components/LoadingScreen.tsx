import { motion } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      onAnimationComplete={() => onComplete()}
      id="loading-screen"
      style={{ backgroundColor: "#FAF7F2" }} // Warm beige
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
    >
      <div className="text-center relative">
        {/* Soft elegant glowing ring background */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-10 bg-pink-100/40 rounded-full blur-3xl"
        />

        {/* Animated logo flower icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative inline-block mb-6"
        >
          <svg
            className="w-16 h-16 text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18M3 12h18M12 3c3.333 4 3.333 8 0 12M12 3c-3.333 4-3.333 8 0 12M12 21c3.333-4 3.333-8 0-12M12 21c-3.333-4-3.333-8 0-12M3 12c4 3.333 8 3.333 12 0M3 12c4-3.333 8-3.333 12 0M21 12c-4 3.333-8 3.333-12 0M21 12c-4-3.333-8-3.333-12 0"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Brand Typography */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-2xl md:text-3xl font-light text-slate-800 tracking-widest uppercase mb-2"
        >
          Fitness Freak
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-xs uppercase tracking-[0.25em] text-slate-600 font-light"
        >
          Ladies Gym & Wellness Sanctuary
        </motion.p>
      </div>
    </motion.div>
  );
}
