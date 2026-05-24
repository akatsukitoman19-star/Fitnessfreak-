import { motion } from "motion/react";
import { Instagram, Facebook, Linkedin, Sparkles } from "lucide-react";
import imgAnanya from "../assets/images/trainer_ananya_1779635185362.png";
import imgPriya from "../assets/images/trainer_priya_1779635208194.png";
import imgSofia from "../assets/images/trainer_sofia_1779635225831.png";

export default function Trainers() {
  const trainers = [
    {
      id: "ananya",
      name: "Ananya Sharma",
      specialty: "Yoga, Spiritual Flow & Meditation Coach",
      experience: "8+ Years Experience",
      image: imgAnanya,
      bio: "Ananya integrates traditional Hatha yoga with mindful meditation practices. She believes in healing the nervous system while building functional stability.",
      socials: { instagram: "#", facebook: "#", linkedin: "#" },
    },
    {
      id: "priya",
      name: "Priya Kapoor",
      specialty: "Pilates, Posture Specialist & Dance Fitness",
      experience: "6+ Years Experience",
      image: imgPriya,
      bio: "Priya blends rhythmic cardiovascular dance with therapeutic mat pilates. Her energy is infectious, bringing vibrant smiles and grace to her students.",
      socials: { instagram: "#", facebook: "#", linkedin: "#" },
    },
    {
      id: "sofia",
      name: "Sofia Khan",
      specialty: "Strength Training, Kettlebell & Metabolic Prep",
      experience: "7+ Years Experience",
      image: imgSofia,
      bio: "Sofia empowers ladies to master resistance training with confidence. She specializes in female strength progression, endurance patterns, and active recovery.",
      socials: { instagram: "#", facebook: "#", linkedin: "#" },
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Soft background radial glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-purple-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C47365] font-light">OUR ELITE TEAM</span>
          <h2 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide"
          >
            Empowering <span className="font-serif italic text-pink-400">Female Gurus</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-200 mx-auto" />
          <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
            Our certified mentors offer safe, highly personalized coaching tailored specifically to your physiological rhythm and longevity.
          </p>
        </div>

        {/* Trainers Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2.5rem] border border-pink-100/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-350 flex flex-col h-full"
            >
              {/* Photo Area with overlay badge */}
              <div className="relative aspect-square overflow-hidden group">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Backdrop tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Trainer Experience Overlay Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-pink-100/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-pink-400 animate-pulse-soft" />
                  <span className="text-[10px] uppercase font-light tracking-widest text-[#C47365]">
                    {trainer.experience}
                  </span>
                </div>
              </div>

              {/* Bio & Details Area */}
              <div className="p-8 flex flex-col flex-grow justify-between text-left">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C47365] font-light">
                    {trainer.specialty}
                  </span>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl font-light text-slate-800"
                  >
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                {/* Social icons */}
                <div className="pt-6 border-t border-pink-100/30 flex items-center justify-between mt-6">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-light">
                    CONNECT ONLINE
                  </span>
                  <div className="flex gap-4">
                    <a
                      href={trainer.socials.instagram}
                      className="p-1 text-slate-400 hover:text-pink-400 transition-colors"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={trainer.socials.facebook}
                      className="p-1 text-slate-400 hover:text-pink-400 transition-colors"
                      aria-label="Facebook Profile"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={trainer.socials.linkedin}
                      className="p-1 text-slate-400 hover:text-pink-400 transition-colors"
                      aria-label="Linkedin Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
